from .db import db

class Score(db.Model):
    __tablename__ = 'scores'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    score = db.Column(db.Integer, primary_key=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'score': self.score
        }
