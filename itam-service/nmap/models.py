from flask.app import Flask
#from ..__init__ import db
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from flask import Flask

app = Flask(__name__)
db = SQLAlchemy(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../site.db'
app.config['SQLALCHEMY_BINDS'] = {
    'DETAILS': 'sqlite:///../DB/DETAILS.db',
    'PORT_USED': 'sqlite:///../DB/PORT_USED.db',
    "TCP": 'sqlite:///../DB/TCP.db',
    "UDP": 'sqlite:///../DB/UDP.db'
}


class PORT_USED(db.Model, UserMixin):
    __bind_key__ = 'PORT_USED'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    host = db.Column(db.String(100), nullable=False)
    scan_date = db.Column(db.String(100), nullable=False)
    num_probes = db.Column(db.Integer, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "host": self.host,
            "scan_date": self.scan_date,
            "num_probes": self.num_probes
        }


class TCP(db.Model, UserMixin):
    __bind_key__ = 'TCP'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    ip_addr = db.Column(db.String(100), nullable=True)
    host = db.Column(db.String(100), nullable=True)
    port_number = db.Column(db.Integer, nullable=True)
    conf = db.Column(db.String(100), nullable=True)
    cpe = db.Column(db.String(100), nullable=True)
    extrainfo = db.Column(db.String(100), nullable=True)
    name = db.Column(db.String(100), nullable=True)
    product = db.Column(db.String(100), nullable=True)
    reason = db.Column(db.String(100), nullable=True)
    state = db.Column(db.String(100), nullable=True)
    version = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "ip_addr": self.ip_addr,
            "host": self.host,
            "port_number": self.port_number,
            "conf": self.conf,
            "cpe": self.cpe,
            "extrainfo": self.extrainfo,
            "name": self.name,
            "product": self.product,
            "reason": self.reason,
            "state": self.state,
            "version": self.version
        }


class UDP(db.Model, UserMixin):
    __bind_key__ = 'UDP'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    ip_addr = db.Column(db.String(100), nullable=True)
    host = db.Column(db.String(100), nullable=True)
    port_number = db.Column(db.Integer, nullable=True)
    conf = db.Column(db.String(100), nullable=True)
    cpe = db.Column(db.String(100), nullable=True)
    extrainfo = db.Column(db.String(100), nullable=True)
    name = db.Column(db.String(100), nullable=True)
    product = db.Column(db.String(100), nullable=True)
    reason = db.Column(db.String(100), nullable=True)
    state = db.Column(db.String(100), nullable=True)
    version = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "ip_addr": self.ip_addr,
            "host": self.host,
            "port_number": self.port_number,
            "conf": self.conf,
            "cpe": self.cpe,
            "extrainfo": self.extrainfo,
            "name": self.name,
            "product": self.product,
            "reason": self.reason,
            "state": self.state,
            "version": self.version
        }


class DETAILS(db.Model, UserMixin):
    __bind_key__ = 'DETAILS'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    host = db.Column(db.String(100), nullable=True)
    name = db.Column(db.String(100), nullable=True)
    type = db.Column(db.String(100), nullable=True)
    reason = db.Column(db.String(100), nullable=True)
    state = db.Column(db.String(100), nullable=True)
    os_accuracy = db.Column(db.Integer, nullable=True)
    os_line = db.Column(db.String(100), nullable=True)
    os_name = db.Column(db.String(100), nullable=True)
    os_family = db.Column(db.String(100), nullable=True)
    os_gen = db.Column(db.String(100), nullable=True)
    os_type = db.Column(db.String(100), nullable=True)
    vendor = db.Column(db.String(100), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "host": self.host,
            "name": self.name,
            "type": self.type,
            "reason": self.reason,
            "state": self.state,
            "os_accuracy": self.os_accuracy,
            "os_line": self.os_line,
            "os_name": self.os_name,
            "os_family": self.os_family,
            "os_gen": self.os_gen,
            "os_type": self.os_type,
            "vendor": self.vendor
        }
