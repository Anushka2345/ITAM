from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config['SECRET_KEY'] = 'P2Prdhgi!trfgvc34cfjvjg'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
    db.__init__(app)
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login_post'
    login_manager.init_app(app)
    with app.app_context():
        from .auth import auth
        app.register_blueprint(auth.auth)
    return app