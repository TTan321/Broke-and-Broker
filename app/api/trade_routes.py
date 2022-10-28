from crypt import methods
from flask import Blueprint, request
from ..forms import Trades_Form
from ..models import db, Trade
from flask_login import current_user


trade_routes = Blueprint('trades', __name__)

# get a portfolio's trades
@trade_routes.route('/<int:portfolio_id>')
def get_portfolio_trades(portfolio_id):
    portfolio_trades = Trade.query.filter(Trade.portfolioId == portfolio_id)
    if len([trade.to_dict_trades() for trade in portfolio_trades]):
        return {'trades': [trade.to_dict_trades_rel() for trade in portfolio_trades]}
    return {'message': 'Error, portfolio id not exist'}

# add a trade
@trade_routes.route('/<int:portfolio_id>', methods=['POST'])
def get_portfolio_trades(portfolio_id):
    form = Trades_Form()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Trade()
        form.populate_obj(data)
        db.session.add(data)
        db.session.commit()
        return {'trade': data.to_dict_trades_rel()}
    return form.errors
