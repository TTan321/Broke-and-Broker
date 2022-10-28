from .db import db

class Portfolio(db.Model) :
    __tablename__ = "portfolios"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    account_name = db.Column(db.String(100), nullable=False)
    buying_power = db.Column(db.Float, default=0)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    owner = db.relationship('User', back_populates='portfolios', cascade='all, delete')
    trades = db.relationship('Trade', back_populates='portfolios', cascade='all, delete')
    transactions = db.relationship('Transaction', back_populates='portfolios', cascade='all, delete')
    watchlists = db.relationship('Watchlist', back_populates='portfolios', cascade='all, delete')

    def to_dict_portfolio(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "accountName": self.account_name,
            "buyingPower": self.buying_power,
        }

    def to_dict_portfolio_rel(self):
        return {
            "id": self.id,
            "ownerId": self.owner_id,
            "accountName": self.account_name,
            "buyingPower": self.buying_power,
            "trades": [trade.to_dict_trade() for trade in self.trades],
            "watchlist": [watchlist.to_dict_watchlist() for watchlist in self.watchlists],
            "transactions": [transaction.to_dict_transcation() for transaction in self.transactions]
        }
