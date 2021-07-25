from flask import Blueprint
from flask import request
from flask_cors import cross_origin
from .model import User
from ..__init__ import db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from flask_login import login_user, logout_user, login_required

auth = Blueprint('auth', __name__)


@auth.route('/register', methods=["GET", "POST"])
@cross_origin()
def register():
    resp = request.json
    newuser = User(email=resp['email'], first_name=resp['Firstname'], last_name=resp['Lastname'],
                   username=resp['username'], organization=resp['Organisation'],
                   password=generate_password_hash(resp['password'], method='sha256'))
    db.session.add(newuser)
    db.session.commit()
    return "Registration Successful!", 200


@auth.route('/login', methods=["GET", "POST"])
@cross_origin()
def login():
    resp = request.json
    user = User.query.filter_by(username=resp['username']).first()
    if not user or not check_password_hash(user.password, resp['password']):
        return "Enter valid username or password", 403
    login_user(user, remember=resp['remember'])
    return "Login Successful", 200


@auth.route('/logout', methods=["GET", "POST"])
@cross_origin()
@login_required
def logout():
    logout_user()
    return "Logout Succesful!", 200
