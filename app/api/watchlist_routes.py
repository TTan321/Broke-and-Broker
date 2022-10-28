from flask import Blueprint, request

from ..models import db, Watchlist
from ..forms import WatchlistForm

watchlist_routes = Blueprint('watchlists', __name__)

# add assets to portfolio's watchlist
@watchlist_routes.route('/<int:portfolio_id>', methods=['POST'])
def get_portfolios_watchlist(portfolio_id):
    watchlist = Watchlist.query.filter(Watchlist.portfolioId == portfolio_id)[0]
    form = WatchlistForm()
    if len(watchlist.to_dict_watchlist()):
        if form.validate_on_submit():
            data = Watchlist()
            form.populate_obj(data)
            db.session.add(data)
            db.session.commit()
            return {'newWatchlistAsset': data.to_dict_watchlist_rel()}
        return form.errors
    return {'error': 'portfolio id does not exist'}


# delete an asset in watchlist
@watchlist_routes.route('<int:watchlist_id', methods=['DELETE'])
def delete_watchlist_asset(watchlist_id):
    selected_asset = Watchlist.query.get(watchlist_id)
    if selected_asset:
        db.session.delete(selected_asset)
        db.session.commit()
        return{"message": "Item has been removed from watchlist"}
    return { 'message': "This item does not exist"}
