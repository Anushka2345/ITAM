from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager

db = SQLAlchemy()
app = None

def create_app():
    app = Flask(__name__)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config['SECRET_KEY'] = 'P2Prdhgi!trfgvc34cfjvjg'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///DB/site.db'
    app.config['SQLALCHEMY_BINDS'] = {
        'DETAILS': 'sqlite:///DB/DETAILS.db',
        'PORT_USED': 'sqlite:///DB/PORT_USED.db',
        "TCP": 'sqlite:///DB/TCP.db',
        "UDP": 'sqlite:///DB/UDP.db'
    }

    db.__init__(app)
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login_post'
    login_manager.init_app(app)
    with app.app_context():
        from .auth import auth
        app.register_blueprint(auth.auth)
        from .nmap import api
        app.register_blueprint(api.api)
    return app

