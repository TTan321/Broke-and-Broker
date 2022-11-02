from .db import db
from datetime import datetime

class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolios.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.Date, default = datetime.datetime())
    portfolios = db.relationship('Portfolio', back_populates='transactions', cascade='all, delete')


    def to_dict_transactions(self):
        return {
            'id': self.id,
            'portfolioId': self.portfolio_id,
            'amount': self.amount,
            'type': self.type,
            'createdAt': self.created_at
        }

    def to_dict_transactions_rel(self):
        return {
            'id': self.id,
            'portfolioId': self.portfolio_id,
            'amount': self.amount,
            'type': self.type,
            'createdAt': self.created_at,
            'portfolios': [portfolio.to_dict_portfolio() for portfolio in self.portfolios]
        }
