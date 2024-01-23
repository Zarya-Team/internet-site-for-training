"""add relationship of tables

Revision ID: 65d1482d0a69
Revises: 2b105d230837
Create Date: 2024-01-23 13:35:47.036295

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import fastapi_users_db_sqlalchemy


# revision identifiers, used by Alembic.
revision: str = "65d1482d0a69"
down_revision: Union[str, None] = "2b105d230837"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "favourites",
        sa.Column("user_id", fastapi_users_db_sqlalchemy.generics.GUID(), nullable=True),
        sa.Column("recipe_id", sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(
            ["recipe_id"],
            ["recipes.id"],
        ),
        sa.ForeignKeyConstraint(
            ["user_id"],
            ["user.id"],
        ),
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table("favourites")
    # ### end Alembic commands ###
