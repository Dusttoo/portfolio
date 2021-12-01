"""empty message

Revision ID: 6d790e4f0ea2
Revises: ffdc0a98111c
Create Date: 2021-12-01 07:28:23.404543

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '6d790e4f0ea2'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('scores',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('score', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id', 'score'),
    sa.UniqueConstraint('name')
    )
    op.drop_table('HighSocres')
    op.drop_table('SequelizeMeta')
    op.drop_table('Users')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Users',
    sa.Column('id', sa.INTEGER(), server_default=sa.text('nextval(\'"Users_id_seq"\'::regclass)'), autoincrement=True, nullable=False),
    sa.Column('username', sa.VARCHAR(length=30), autoincrement=False, nullable=False),
    sa.Column('email', sa.VARCHAR(length=256), autoincrement=False, nullable=False),
    sa.Column('hashedPassword', postgresql.BYTEA(), autoincrement=False, nullable=False),
    sa.Column('createdAt', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.Column('updatedAt', postgresql.TIMESTAMP(timezone=True), server_default=sa.text('now()'), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='Users_pkey'),
    sa.UniqueConstraint('email', name='Users_email_key'),
    sa.UniqueConstraint('username', name='Users_username_key')
    )
    op.create_table('SequelizeMeta',
    sa.Column('name', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('name', name='SequelizeMeta_pkey')
    )
    op.create_table('HighSocres',
    sa.Column('id', sa.INTEGER(), server_default=sa.text('nextval(\'"HighSocres_id_seq"\'::regclass)'), autoincrement=True, nullable=False),
    sa.Column('name', sa.VARCHAR(length=255), autoincrement=False, nullable=False),
    sa.Column('score', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('createdAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.Column('updatedAt', postgresql.TIMESTAMP(timezone=True), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='HighSocres_pkey')
    )
    op.drop_table('scores')
    # ### end Alembic commands ###
