from .db import db
from datetime import datetime

class Trade(db.Model):
    __tablename__ = 'trades'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolios.id'), nullable=False)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)
    asset_quantity = db.Column(db.Integer, nullable=False)
    asset_value = db.Column(db.Float, nullable=False)
    trade_value = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.Date, default = datetime.datetime())
    portfolios = db.relationship('Portfolio', back_populates='trades', cascade='all, delete')
    assets = db.relationship('Asset', back_populates='trades', cascade='all, delete')



    def to_dict_trades(self):
        return {
            'id': self.id,
            'portfolioId': self.portfolio_id,
            'assetId':self.asset_id,
            'assetQuantity': self.asset_quantity,
            'assetValue': self.asset_value,
            'tradeValue': self.trade_value,
            'type': self.type,
            'createdAt': self.created_at
        }

    def to_dict_trades_rel(self):
        return {
            'id': self.id,
            'portfolioId': self.portfolio_id,
            'assetId':self.asset_id,
            'assetQuantity': self.asset_quantity,
            'assetValue': self.asset_value,
            'tradeValue': self.trade_value,
            'type': self.type,
            'createdAt': self.created_at,
            "assets": [asset.to_dict_assets() for asset in self.assets]
        }
