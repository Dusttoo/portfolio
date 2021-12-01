"""empty message

Revision ID: 0c3cb67911d3
Revises: e5bf727be496
Create Date: 2021-12-01 07:57:04.462334

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0c3cb67911d3'
down_revision = 'e5bf727be496'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('scores', sa.Column('score', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('scores', 'score')
    # ### end Alembic commands ###