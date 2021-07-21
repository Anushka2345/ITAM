from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    cors = CORS(app)

    with app.app_context():
        from .auth import auth
        app.register_blueprint(auth.auth)

        return app