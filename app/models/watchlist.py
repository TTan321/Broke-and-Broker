from .db import db

class Watchlist(db.Model) :
    __tablename__ = "watchlists"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)
    portfolio = db.relationship('Portfolio', back_populates='watchlist', cascade='all, delete')
    assets = db.relationship('Asset', back_populates='watchlist', cascade='all, delete')

    def to_dict_watchlist(self):
        return {
            "id": self.id,
            "name": self.name,
            "assetId": self.asset_id
        }

    def to_dict_watchlist_rel(self):
        return {
            "id": self.id,
            "name": self.name,
            "assetId": self.asset_id,
            "assets":[asset.to_dict_assets() for asset in self.assets]
        }
