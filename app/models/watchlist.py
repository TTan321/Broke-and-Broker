from .db import db

class Portfolio(db.Model) :
    __tablename__ = "watchlists"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)


    def to_dict_portfolio(self):
        return {
            "id": self.id,
            "name": self.name,
            "assetId": self.asset_id
        }
