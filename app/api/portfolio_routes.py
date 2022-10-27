from crypt import methods
from flask import Blueprint, request

from app.models import portfolio
from ..forms import PortfolioForm
from ..models import db, Portfolio
from flask_login import current_user

portfolio_routes = Blueprint('portfolio', __name__)


@portfolio_routes.route('/')
def get_user_portfolios():
    user = current_user.to_dict()
    user_portfolios = Portfolio.query.filter(Portfolio.owner_id == user['id'])
    return {'userPortfolios': [portfolio.to_dict_portfolio_rel() for portfolio in user_portfolios]}

@portfolio_routes.route('', methods=['POST'])
def add_portfolio():
    user = current_user.to_dict()
    form = PortfolioForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = PortfolioForm(
            ownerId = user['id'],
            accountName = form.data['accountName']
        )
        db.session.add(data)
        db.session.commit()
        return {"portfolio": data.to_dict_portfolio_rel()}
    return form.errors

@portfolio_routes.route('<int:portfolio_id', methods=['PUT'])
def add_portfolio(portfolio_id):
    form = PortfolioForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        portfolio_data = Portfolio.query.get(portfolio_id)
        db.session.add(portfolio_data)
        db.session.commit()
        return {"portfolio": portfolio_data.to_dict_portfolio_rel()}
    return form.errors

@portfolio_routes.route('<int:portfolio_id', methods=['DELETE'])
def add_portfolio(portfolio_id):
    selected_portfolio = portfolio.query.get(portfolio_id)
    if selected_portfolio:
        db.session.delete(selected_portfolio)
        db.session.commit()
        return{"message": "Portfolio has been deleted"}
    return { 'message': "This portfolio does not exist"}
