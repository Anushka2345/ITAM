from flask import Blueprint
from flask_cors.decorator import cross_origin
from .models import *
from ..__init__ import db

api = Blueprint('api', __name__)


@api.route('/fetchTCP', methods=['GET', 'POST'])
@cross_origin()
def fetch_tcp():
    tcp_session = \
            db.create_scoped_session(options=dict(bind=db.get_engine(app, 'TCP'), binds={}))
    result = TCP.query.all()
    toSend = []
    for tcp in result:
        toSend.append(tcp.to_json())
    return {"result": toSend}, 200


@api.route('/fetchUDP', methods=['GET', 'POST'])
@cross_origin()
def fetch_udp():
    udp_session = db.create_scoped_session(options=dict(bind=db.get_engine(app, 'UDP'), binds={}))
    result = UDP.query.all()
    toSend = []
    for udp in result:
        toSend.append(udp.to_json())
    return {"result": toSend}, 200


@api.route('/fetchDetails', methods=['GET', 'POST'])
@cross_origin()
def fetch_details():
    details_session = db.create_scoped_session(options=dict(bind=db.get_engine(app, 'DETAILS'), binds={}))
    result = DETAILS.query.all()
    toSend = []
    for detail in result:
        toSend.append(detail.to_json())
    return {"result": toSend}, 200


@api.route('/fetchStats', methods=['GET', 'POST'])
@cross_origin()
def fetch_stats():
    stats_session = db.create_scoped_session(options=dict(bind=db.get_engine(app, 'PORT_USED'), binds={}))
    result = PORT_USED.query.all()
    toSend = []
    for detail in result:
        toSend.append(detail.to_json())
    return {"result": toSend}, 200
