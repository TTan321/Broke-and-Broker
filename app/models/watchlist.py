from .db import db

class Watchlist(db.Model) :
    __tablename__ = "watchlists"

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolios.id'), nullable=False)
    asset_id = db.Column(db.Integer, db.ForeignKey('assets.id'), nullable=False)
    portfolios = db.relationship('Portfolio', back_populates='watchlists', cascade='all, delete')
    assets = db.relationship('Asset', back_populates='watchlist', cascade='all, delete')

    def to_dict_watchlist(self):
        return {
            "id": self.id,
            "name": self.name,
            "portfolioId": self.portfolio_id,
            "assetId": self.asset_id
        }

    def to_dict_watchlist_rel(self):
        return {
            "id": self.id,
            "name": self.name,
            "portfolioId": self.portfolio_id,
            "assetId": self.asset_id,
            "assets":[asset.to_dict_assets() for asset in self.assets]
        }
