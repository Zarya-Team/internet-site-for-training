from sqlalchemy.orm import Mapped, mapped_column
import sqlalchemy as sa
from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends
from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
import fastapi_users_db_sqlalchemy

from src.settings.db import Base, get_async_session
from src.apps.schema import RecipesSchema, CountriesSchema, CategoriesSchema, IngredientsSchema

favourites_association_table = Table(
    'favourites',
    Base.metadata,
    Column('user_id', fastapi_users_db_sqlalchemy.generics.GUID, ForeignKey('user.id')),
    Column('recipe_id', Integer, ForeignKey('recipes.id'))
)

class User(SQLAlchemyBaseUserTableUUID, Base):
    
    favourites = relationship('Recipes', secondary=favourites_association_table)


async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)


class Recipes(Base):
    __tablename__ = "recipes"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    title: Mapped[str] = mapped_column(sa.String(150))
    description: Mapped[str] = mapped_column(sa.String(1500))
    countries_id: Mapped[int] = mapped_column(sa.ForeignKey("countries.id"))
    categories_id: Mapped[int] = mapped_column(sa.ForeignKey("categories.id"))

    def to_read_model(self) -> RecipesSchema:
        return RecipesSchema(id=self.id, title=self.title, desc=self.description)


class Countries(Base):
    __tablename__ = "countries"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(sa.String(150))
    history: Mapped[str] = mapped_column(sa.String(1500))

    def to_read_model(self) -> CountriesSchema:
        return CountriesSchema(id=self.id, name=self.name, history=self.history)


class Categories(Base):
    __tablename__ = "categories"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(sa.String(150))

    def to_read_model(self) -> CategoriesSchema:
        return CategoriesSchema(id=self.id, name=self.name)


class Ingredients(Base):
    __tablename__ = "ingredients"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(sa.String(150))

    def to_read_model(self) -> IngredientsSchema:
        return IngredientsSchema(id=self.id, name=self.name)


class RecipesIngredients(Base):
    __tablename__ = "recipes_ingredients"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    weight: Mapped[float] = mapped_column(sa.Float())
    recipe_id: Mapped[int] = mapped_column(sa.ForeignKey("recipes.id"))
    ingredients_id: Mapped[int] = mapped_column(sa.ForeignKey("ingredients.id"))
