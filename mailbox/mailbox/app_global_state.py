from flask import g, Flask
from sqlalchemy import create_engine

import conf

app = Flask("mailbox")


def connect_to_database():
    return create_engine('sqlite:///%s' % conf.db_path)


def get_db():
    # http://flask.pocoo.org/docs/0.12/appcontext/#context-usage
    db = getattr(g, 'database', None)
    if db is None:
        db = g.database = connect_to_database()
    return db


@app.teardown_appcontext
def teardown_db(exception):
    # http://flask.pocoo.org/docs/0.12/appcontext/#context-usage
    db = getattr(g, 'database', None)
    if db is not None:
        db.close()


def get_userdata_cache():
    if not hasattr(g, 'userdata_cache'):
        g.userdata_cache = dict()
    return g.userdata_cache
