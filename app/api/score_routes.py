from flask import Blueprint, jsonify, request
from app.models.score import Score, db
from app.forms.score_form import ScoreForm

tetris_routes = Blueprint('tetris', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@tetris_routes.route('/')
def tetris():
    scores = Score.query.all()
    return {'scores': [score.to_dict() for score in scores]}


@tetris_routes.route('/add')
def add_score():
    if request.method == "POST":
        form = ScoreForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = Score()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
            return data.to_dict()
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401
