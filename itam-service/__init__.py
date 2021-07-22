from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    first_name = db.Column(db.String(20), nullable = False)
    last_name = db.Column(db.String(20), nullable=False)
    username = db.Column(db.String(20), unique=True, nullable = False)
    organization = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return "{}, {}, {}".format(self.username, self.email, self.password)

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    db.__init__(app)

    cors = CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
    return app