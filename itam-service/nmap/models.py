from ..__init__ import db
from flask_login import UserMixin

class TCP(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    port_number = db.Column(db.Integer, nullable=False)
