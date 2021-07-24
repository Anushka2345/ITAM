from flask import Blueprint
from flask_cors.decorator import cross_origin
from .util import persistToDb

nmap = Blueprint('nmap', __name__)

@nmap.route('/addDetails', methods=["GET", "POST"])
@cross_origin()
def add_details():
    persistToDb()
    return "ehl"