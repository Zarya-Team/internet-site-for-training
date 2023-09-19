from pydantic import BaseModel
from typing import List

class Ingredients(BaseModel):
    id: int
    name: str
    weight: float

class Recipes(BaseModel):
    id: int
    title: str
    desc: str
    countries_name: str
    catigory: str
    ingredients: List[Ingredients]
    
class Countries(BaseModel):
    id: int
    name: str
    history: str
    
class Categories(BaseModel):
    id: int
    name: str