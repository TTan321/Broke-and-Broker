from .db import db

class Transcaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolio.id'), nullable=False)
    buying_power_id = db.Column(db.Integer, db.ForeignKey('buying_power.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    portfolios = db.relationship('Portfolio', back_populates='portfolios', cascade='all, delete')
    buying_powers = db.relationship('Buying_Power', back_populates='trades', cascade='all, delete')

    def to_dict_transactions(self):
        return {
            'id': self.id,
            'portfolioId': self.portfolio_id,
            'buyingPowerId': self.buying_power_id,
            'amount': self.amount,
            'type': self.type
        }

    def to_dict_transactions_rel(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'amount': self.amount,
            'type': self.type,
            'buyingPowers': [bp.to_dict_buying_power() for bp in self.buying_powers],
            'portfolios': [portfolio.to_dict_portfolio() for portfolio in self.portfolios]
        }
