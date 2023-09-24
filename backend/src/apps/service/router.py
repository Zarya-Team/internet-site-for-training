from fastapi import APIRouter, Depends
from sqlalchemy import select

from typing import List

from src.apps.schema import RecipesSchema, CountriesSchema, CategoriesSchema, RecipeIngredientsSchema
from src.settings.test_data import data_countries, data_recipes, data_categories
from src.settings.db import get_async_session, AsyncSession
from src.apps.model import *

router: APIRouter = APIRouter()


@router.get("/countries", response_model=List[CountriesSchema])
async def countries_get_all(sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(
        select(Countries)
    )
    
    return [c[0].to_read_model() for c in query]

@router.get("/countries_recipes", response_model=List[RecipesSchema])
async def countries_recipes_get_all(countries_id: int, sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(
        select(Recipes).filter(Recipes.countries_id == countries_id)
    )
    return [c[0].to_read_model() for c in query]

@router.get("/categories_recipes", response_model=List[RecipesSchema])
async def categories_recipes_get_all(categories_id: int, sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(
        select(Recipes).filter(Recipes.categories_id == categories_id)
    )
    return [c[0].to_read_model() for c in query]

@router.get("/categories", response_model=List[CategoriesSchema])
async def сategories_get_all(sesion: AsyncSession = Depends(get_async_session)):
    query = await sesion.execute(
        select(Categories)
    )
    
    return [c[0].to_read_model() for c in query]

@router.get("/recipe", response_model=RecipeIngredientsSchema)
async def recipe_get(recipe_id:int, sesion: AsyncSession = Depends(get_async_session)):
    query_1 = await sesion.execute(
        select(Recipes).where(Recipes.id == recipe_id)
    )
    data = list(query_1)[0][0]
    query_2 = await sesion.execute(
        select(RecipesIngredients).where(RecipesIngredients.recipe_id == recipe_id)
    )
    list_ingredients = []
    for i in query_2:
        query_3 = await sesion.execute(
            select(Ingredients).where(Ingredients.id == i[0].ingredients_id)
        )
        list_ingredients.append({
            "name" : list(query_3)[0][0].name,
            "weight" : i[0].weight,
        })
    data_recipes = {
        "id" : data.id,
        "title" : data.title,
        "desc" : data.description,
        "ingredients" : list_ingredients
    }
    return data_recipes
