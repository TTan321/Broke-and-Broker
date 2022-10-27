from .db import db

class Transcaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, nullable=False, primaryKey=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(50), nullable=False)
    buying_power = db.relationship('Buying_Power', back_populates='trades', cascade='all, delete')

    def to_dict_transactions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'amount': self.amount,
            'type': self.type
        }

    def to_dict_transactions_rel(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'amount': self.amount,
            'type': self.type,
            'buyingPower': [bp.to_dict_buying_power() for bp in self.buying_power]
        }
