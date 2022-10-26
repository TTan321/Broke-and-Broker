from .db import db

class Buying_Power(db.Model):
    __tablename__ = 'buying_powers'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    portfolio_id = db.Column(db.integer, db.ForeignKey('portfolios.id'), nullable=False)
    transaction_id = db.Column(db.Integer, db.ForeignKey('transactions.id'), nullable=False)
    trade_id = db.Column(db.Integer, db.ForeignKey('trades.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)

    def to_dict_buying_powers(self):
        return {
            "id": self.id,
            "portfolioId": self.portfolio_id,
            "transactionId": self.transaction_id,
            "tradeId": self.trade_id,
            "amount": self.amount
        }
