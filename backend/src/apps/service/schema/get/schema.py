from pydantic import BaseModel
from typing import List

class IngredientsSchema(BaseModel):
    id: int
    name: str
    weight: float

class RecipesSchema(BaseModel):
    id: int
    title: str
    desc: str
    
class CountriesSchema(BaseModel):
    id: int
    name: str
    history: str
    
class CategoriesSchema(BaseModel):
    id: int
    name: str
    
class IngredientsRecipeSchema(BaseModel):
    name:str
    weight: float

class RecipeIngredientsSchema(BaseModel):
    title: str
    desc: str
    ingredients: List[IngredientsRecipeSchema]
    