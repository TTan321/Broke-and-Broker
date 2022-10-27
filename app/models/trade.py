from .db import db
from datetime import date

class Trade(db.Model):
    __tablename__ = 'trades'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)
    asset_quantity = db.Column(db.Integer, nullable=False)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.Date, default = date.today())
    portfolio = db.relationship('Portfolio', back_populates='trades', cascade='all, delete')
    assets = db.relationship('Asset', back_populates='trades', cascade='all, delete')

    def to_dict_trades(self):
        return {
            'id': self.id,
            'assetId': self.asset_id,
            'assetQuantity': self.asset_quantity,
            'amount': self.amount,
            'type': self.type,
            'createdAt': self.created_at
        }

    def to_dict_trades_rel(self):
        return {
            'id': self.id,
            'assetId': self.asset_id,
            'assetQuantity': self.asset_quantity,
            'amount': self.amount,
            'type': self.type,
            'createdAt': self.created_at,
            "assets": [asset.to_dict_assets() for asset in self.assets]
        }
