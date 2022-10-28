from sqlalchemy import null
from .db import db
from datetime import date

class Asset(db.Model):
    __tablename__ = 'assets'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    ticker = db.Column(db.String(5), nullable=False)
    value = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.Date, default = date.today())
    watchlist = db.relationship('Watchlist', back_populates='assets', cascade='all, delete')
    trades = db.relationship('Trade', back_populates='assets', cascade='all, delete')

    def to_dict_assets(self):
        return {
            'id': self.id,
            'name': self.name,
            'ticker': self.ticker,
            'value': self.value,
            'createdAt': self.created_at
        }
