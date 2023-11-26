from fastapi import APIRouter, Depends, Query
from sqlalchemy import select

from typing import List

from src.apps.schema import RecipesSchema, CountriesSchema, CategoriesSchema, RecipeIngredientsSchema
from src.settings.db import get_async_session, AsyncSession
from src.apps.model import *

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
]


@router.get(
    "/countries", response_model=List[CountriesSchema], tags=["Катигории для фильтров"], summary="Получение всех стран"
)
async def countries_get_all(sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(select(Countries))

    return [c[0].to_read_model() for c in query]


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
