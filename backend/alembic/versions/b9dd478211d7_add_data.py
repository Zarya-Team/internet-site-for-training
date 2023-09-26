"""add data

Revision ID: b9dd478211d7
Revises: e9c74dce1f0b
Create Date: 2023-09-24 23:05:10.757274

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'b9dd478211d7'
down_revision: Union[str, None] = 'e9c74dce1f0b'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("INSERT INTO countries (id, name, history) VALUES (1, 'Франция', 'бля ебать там блины пездатые')")
    op.execute("INSERT INTO countries (id, name, history) VALUES (2, 'Япония', 'Нехера кроме риса')")
    
    op.execute("INSERT INTO categories (id,name) VALUES (1,'Супы')")
    op.execute("INSERT INTO categories (id,name) VALUES (2,'Салаты')")
    
    op.execute("INSERT INTO ingredients (id, name) VALUES (1,'Рамена')")
    op.execute("INSERT INTO ingredients (id, name) VALUES (2,'Соевый соус')")
    op.execute("INSERT INTO ingredients (id, name) VALUES (3,'Мирин')")
    
    op.execute("INSERT INTO ingredients (id,name) VALUES (4,'Тунец')")
    op.execute("INSERT INTO ingredients (id,name) VALUES (5,'Картофель')")
    op.execute("INSERT INTO ingredients (id,name) VALUES (6,'Помидоры')")
    op.execute("INSERT INTO ingredients (id,name) VALUES (7,'Маслина')")
    
    op.execute("INSERT INTO recipes (id, title, description, countries_id, categories_id) VALUES (1, 'Рамэн', 'хуйня из подконя', 2, 1)")
    op.execute("INSERT INTO recipes (id, title, description, countries_id, categories_id) VALUES (2, 'Ницца', 'хуйня из подконя', 1, 2)")
    
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (1, 200, 1, 1)")
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (2, 30, 1, 2)")
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (3, 30, 1, 3)")
    
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (4, 200, 2, 4)")
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (5, 200, 2, 5)")
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (6, 100, 2, 6)")
    op.execute("INSERT INTO recipes_ingredients (id, weight, recipe_id, ingredients_id) VALUES (7, 50, 2, 7)")
    
    


def downgrade() -> None:
    op.execute("DELETE FROM countries WHERE name = 'Россия'")
    op.execute("DELETE FROM countries WHERE name = 'Япония'")
    
    op.execute("DELETE FROM categories WHERE name = 'Супы'")
    op.execute("DELETE FROM categories WHERE name = 'Салаты'")
    
    op.execute("DELETE FROM ingredients WHERE name = 'Рамена'")
    op.execute("DELETE FROM ingredients WHERE name = 'Соевый соус'")
    op.execute("DELETE FROM ingredients WHERE name = 'Мирин'")
    op.execute("DELETE FROM ingredients WHERE name = 'Картофель'")
    op.execute("DELETE FROM ingredients WHERE name = 'Помидоры'")
    op.execute("DELETE FROM ingredients WHERE name = 'Маслина'")
    
    op.execute("DELETE FROM recipes WHERE title = 'Рамэн'")
    op.execute("DELETE FROM recipes WHERE title = 'Ницца'")
    
    op.execute("DELETE FROM recipes_ingredients WHERE id = 1")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 2")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 3")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 4")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 5")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 6")
    op.execute("DELETE FROM recipes_ingredients WHERE id = 7")
