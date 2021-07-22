from flask import Blueprint
from flask import request
from flask_cors import cross_origin

auth = Blueprint('auth',__name__)

@auth.route('/register', methods = ["GET","POST"])
def register():
    return

@auth.route('/login', methods=["GET", "POST"])
@cross_origin()
def login():
    username = request.json['username']
    if (username == "hello"):
        return "login success", 200
    else:
        return "login failed", 200



