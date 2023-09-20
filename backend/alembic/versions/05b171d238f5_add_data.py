"""Add Data

Revision ID: 05b171d238f5
Revises: 306e0cd10469
Create Date: 2023-09-20 01:47:22.453731

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '05b171d238f5'
down_revision: Union[str, None] = '306e0cd10469'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("INSERT INTO countries (name, history) VALUES ('Россия', 'бля ебать там блины пездатые')")
    op.execute("INSERT INTO countries (name, history) VALUES ('Япония', 'Нехера кроме риса')")
    # Добавьте другие SQL-запросы по мере необходимости


def downgrade() -> None:
    op.execute("DELETE FROM countries WHERE name = 'Россия'")
    op.execute("DELETE FROM countries WHERE name = 'Япония'")
    # Добавьте соответствующие SQL-запросы для отката миграции
