"""add data

Revision ID: 7043c3c3997c
Revises: 3b9e266a49be
Create Date: 2023-09-24 22:23:00.203145

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7043c3c3997c'
down_revision: Union[str, None] = '3b9e266a49be'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass
    
    


def downgrade() -> None:
    pass
