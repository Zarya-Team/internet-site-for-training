from fastapi import APIRouter

from typing import List

from scr.apps.schema.get.schema import Recipes, Countries, Categories
from scr.settings.test_data import data_countries, data_recipes, data_categories

router: APIRouter = APIRouter()


@router.get("/countries", response_model=List[Countries])
async def countries_get_all():
    return data_countries

@router.get("/countries_recipes", response_model=List[Recipes])
async def countries_recipes_get_all(countries_id: int = None, categories_id: int = None):
    if countries_id:
        return data_recipes.get(countries_id, []) 
    elif categories_id:
        return data_recipes.get(categories_id, [])
    else:
        return []

@router.get("/categories", response_model=List[Categories])
async def сategories_get_all():
    return data_categories
