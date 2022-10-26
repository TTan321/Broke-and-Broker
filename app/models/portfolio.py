from sqlalchemy import null
from .db import db

class Portfolio(db.Model) :
    __tablename__ = "portfolios"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    account_name = db.Column(db.String(100), nullable=False)
    trade_id = db.Column(db.Integer, db.ForeignKey('trades.id'), nullable=False)
    buying_power_id = db.Column(db.Integer, db.ForeignKey('buying_power.id'), nullable=False)
    watchlist_id = db.Column(db.Integer, db.ForeignKey('watchlists.id'), nullable=False)
    owner = db.relationship('User', back_populates='portfolios', cascade='all, delete')

    def to_dict_portfolio(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "accountName": self.account_name,
            "tradeId": self.trade_id,
            "buyingPowerId": self.buying_power_id,
            "watchlistId": self.watchlist_id
        }
