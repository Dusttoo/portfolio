from app.models import db, Score


# Adds a demo user, you can add other users here if you want
def seed_scores():
    demo = Score(
        name='Dusty', score=1250)

    db.session.add(demo)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_scores():
    db.session.execute('TRUNCATE high_scores RESTART IDENTITY CASCADE;')
    db.session.commit()
