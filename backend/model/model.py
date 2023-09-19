from sqlalchemy import MetaData, Table, Column, Integer, String, ForeignKey, Float

metadata = MetaData()

recipes = Table(
    "recipes",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String, nullable=False),
    Column("desc", String, nullable=False),
    Column("countries_id", Integer, ForeignKey("countries.id")),
    Column("categories_id", Integer, ForeignKey("categories.id"))
)

countries = Table(
    "countries",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name",String, nullable=False),
    Column("history",String, nullable=False)
)

categories = Table(
    "categories",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False)
)

ingredients = Table(
    "ingredients",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False)
)

recipes_ingredients = Table(
    "recipes_ingredients",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("weight", Float, nullable=False),
    Column("recipe_id", Integer, ForeignKey("recipes.id")),
    Column("ingredients_id", Integer, ForeignKey("ingredients.id"))
)