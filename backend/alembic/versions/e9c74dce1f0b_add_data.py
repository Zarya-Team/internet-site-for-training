"""add data

Revision ID: e9c74dce1f0b
Revises: 7043c3c3997c
Create Date: 2023-09-24 23:05:00.761288

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e9c74dce1f0b'
down_revision: Union[str, None] = '7043c3c3997c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipes', sa.Column('description', sa.String(length=500), nullable=False))
    op.drop_column('recipes', 'desc')
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('recipes', sa.Column('desc', sa.VARCHAR(length=500), autoincrement=False, nullable=False))
    op.drop_column('recipes', 'description')
    # ### end Alembic commands ###
