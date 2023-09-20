from fastapi import APIRouter, Depends
from sqlalchemy import select

from typing import List

from src.apps.schema import RecipesSchema, CountriesSchema, CategoriesSchema
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
async def countries_recipes_get_all(countries_id: int):
    return data_recipes.get(countries_id, [])

@router.get("/categories_recipes", response_model=List[RecipesSchema])
async def categories_recipes_get_all(categories_id: int):
    return data_recipes.get(categories_id, [])

@router.get("/categories", response_model=List[CategoriesSchema])
async def сategories_get_all():
    return data_categories
