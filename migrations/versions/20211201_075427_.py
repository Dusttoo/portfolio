"""empty message

Revision ID: 0984cb98f212
Revises: 5af43a3115ed
Create Date: 2021-12-01 07:54:27.097270

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0984cb98f212'
down_revision = '5af43a3115ed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('scores', sa.Column('id', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('scores', 'id')
    # ### end Alembic commands ###
