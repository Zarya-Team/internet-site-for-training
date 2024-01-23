from fastapi import APIRouter, Depends, Query, HTTPException, status
from sqlalchemy import select
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.future import select

from typing import List

from src.apps.schema import RecipesSchema, CountriesSchema, CategoriesSchema, RecipeIngredientsSchema
from src.settings.db import get_async_session, AsyncSession
from src.apps.model import *
from src.apps.utils import current_active_user

router: APIRouter = APIRouter()

tags_metadata = [
    {
        "name": "Катигории для фильтров",
        "description": "Можно получить данные о страннах, а так же о категориях",
    },
    {
        "name": "Получить данные по фильтру",
        "description": "Созвращают множество карточек подходяшим по фильтрам",
    },
    {
        "name": "Получить полные данные",
        "description": "Возвращает полные данные о рецепте",
    },
    {
        "name": "Избранное",
        "description": "Работа с рецептами для пользователя",
    },
]


@router.get(
    "/countries", response_model=List[CountriesSchema], tags=["Катигории для фильтров"], summary="Получение всех стран"
)
async def countries_get_all(sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(select(Countries))

    return [c[0].to_read_model() for c in query]


# Добавление рецепта в избранное
@router.post("/favourites/{recipe_id}", tags=["Избранное"])
async def add_to_favourites(
    recipe_id: int,
    session: AsyncSession = Depends(get_async_session),
    current_user: User = Depends(current_active_user),
):
    # Загрузка рецепта
    stmt = select(Recipes).where(Recipes.id == recipe_id)
    recipe = await session.scalar(stmt)
    if not recipe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Recipe not found")

    # Загрузка избранных рецептов пользователя асинхронно
    await session.refresh(current_user, attribute_names=["favourites"])

    # Добавление рецепта в избранное
    current_user.favourites.append(recipe)
    session.add(current_user)

    try:
        await session.commit()
    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Could not add to favourites")

    return {"message": "Recipe added to favourites"}


# Удаление рецепта из избранного
@router.delete("/favourites/{recipe_id}", tags=["Избранное"])
async def remove_from_favourites(
    recipe_id: int, session: AsyncSession = Depends(get_async_session), current_user: User = Depends(current_active_user)
):
    # Загрузка рецепта
    stmt = select(Recipes).where(Recipes.id == recipe_id)
    recipe = await session.scalar(stmt)
    if not recipe:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Recipe not found")

    # Явная асинхронная загрузка избранных рецептов пользователя
    await session.refresh(current_user, attribute_names=['favourites'])

    # Удаление рецепта из избранного
    current_user.favourites.remove(recipe)
    session.add(current_user)
    try:
        await session.commit()
    except SQLAlchemyError:
        await session.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Could not remove from favourites"
        )

    return {"message": "Recipe removed from favourites"}


# Получение списка избранных рецептов
@router.get("/favourites", tags=["Избранное"])
async def get_favourites(
    session: AsyncSession = Depends(get_async_session), current_user: User = Depends(current_active_user)
):
    # Явная асинхронная загрузка избранных рецептов
    await session.refresh(current_user, attribute_names=["favourites"])

    # Теперь можно безопасно обращаться к атрибуту favourites
    favourite_recipes = [recipe.to_read_model() for recipe in current_user.favourites]

    return favourite_recipes


@router.get(
    "/countries_recipes",
    response_model=List[RecipesSchema],
    tags=["Получить данные по фильтру"],
    summary="Получение рецептов по стране",
)
async def countries_recipes_get_all(
    countries_id: int,
    sesion: AsyncSession = Depends(get_async_session),
    page: int = Query(1, description="Номер страницы, стандартно 1"),
    per_page: int = Query(5, description="Количество выгружаемных рецептов, стандартно 5"),
):
    offset = (page - 1) * per_page

    query = await sesion.execute(
        select(Recipes).filter(Recipes.countries_id == countries_id).offset(offset).limit(per_page)
    )
    return [c[0].to_read_model() for c in query]


@router.get(
    "/categories_recipes",
    response_model=List[RecipesSchema],
    tags=["Получить данные по фильтру"],
    summary="Получение рецептов по категориям",
)
async def categories_recipes_get_all(
    categories_id: int,
    sesion: AsyncSession = Depends(get_async_session),
    page: int = Query(1, description="Номер страницы, стандартно 1"),
    per_page: int = Query(5, description="Количество выгружаемных рецептов, стандартно 5"),
):
    offset = (page - 1) * per_page

    query = await sesion.execute(
        select(Recipes).filter(Recipes.categories_id == categories_id).offset(offset).limit(per_page)
    )
    return [c[0].to_read_model() for c in query]

@router.get(
    "/search_recipes_by_description",
    response_model=List[RecipesSchema],
    tags=["Получить данные по фильтру"],
    summary="Поиск рецептов по описанию",
)
async def search_recipes_by_description(
    description_query: str = Query(..., description="Текст для поиска в описании рецепта"),
    sesion: AsyncSession = Depends(get_async_session),
    page: int = Query(1, description="Номер страницы, стандартно 1"),
    per_page: int = Query(5, description="Количество выгружаемых рецептов, стандартно 5"),
):
    offset = (page - 1) * per_page

    query = await sesion.execute(
        select(Recipes).filter(Recipes.description.ilike(f"%{description_query}%")).offset(offset).limit(per_page)
    )
    return [c[0].to_read_model() for c in query]


@router.get(
    "/categories",
    response_model=List[CategoriesSchema],
    tags=["Катигории для фильтров"],
    summary="Получение всех категорий",
)
async def сategories_get_all(sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(select(Categories))

    return [c[0].to_read_model() for c in query]


@router.get(
    "/recipe",
    response_model=RecipeIngredientsSchema,
    tags=["Получить полные данные"],
    summary="Получение всей информации о рецепте",
)
async def recipe_get(recipe_id: int, sesion: AsyncSession = Depends(get_async_session)):
    query_1 = await sesion.execute(select(Recipes).where(Recipes.id == recipe_id))
    data = list(query_1)[0][0]
    query_2 = await sesion.execute(select(RecipesIngredients).where(RecipesIngredients.recipe_id == recipe_id))
    list_ingredients = []
    for i in query_2:
        query_3 = await sesion.execute(select(Ingredients).where(Ingredients.id == i[0].ingredients_id))
        list_ingredients.append(
            {
                "name": list(query_3)[0][0].name,
                "weight": i[0].weight,
            }
        )
    data_recipes = {"id": data.id, "title": data.title, "desc": data.description, "ingredients": list_ingredients}
    return data_recipes
