"""empty message

Revision ID: bb0cc6b029ac
Revises: 0c3cb67911d3
Create Date: 2021-12-01 07:59:52.142015

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bb0cc6b029ac'
down_revision = '0c3cb67911d3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('scores', 'score')
    op.drop_column('scores', 'name')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('scores', sa.Column('name', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.add_column('scores', sa.Column('score', sa.INTEGER(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
