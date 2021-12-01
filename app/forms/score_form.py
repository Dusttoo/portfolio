from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.models import User


class ScoreForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    score = IntegerField('score', validators=[DataRequired()])
