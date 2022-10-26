from sqlalchemy import null
from .db import db
from datetime import date

class Asset(db.Model):
    __tablename__ = 'assets'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    name = db.Column(db.String(100), nullable=False)
    ticker = db.Column(db.String(5), nullable=False)
    value = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.Date, default = date.today())

    def to_dict_assets(self):
        return {
            'id': self.id,
            'name': self.name,
            'ticker': self.ticker,
            'value': self.value,
            'createdAt': self.created_at
        }
