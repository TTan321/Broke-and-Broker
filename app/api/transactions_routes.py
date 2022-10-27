from flask import Blueprint, request

from ..models import db, Transcaction
from ..forms import TransactionsForm

transaction_routes = Blueprint('transaction', __name__)

# get a portfolio's transactions
@transaction_routes.route('<int:portfolio_id>')
def get_portfolio_transactions(portfolio_id):
    portfolio_transactions = Transcaction.query.filter(Transcaction.portfolio_id == portfolio_id)
    return {'portfolio_transactions': [transaction.to_dict_transactions_rel() for transaction in portfolio_transactions]}

# add a transaction to the portfolio
@transaction_routes.route('<int:portfolio_id>', methods=['POST'])
def add_transaction(portfolio_id):
    form = TransactionsForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = Transcaction(
            portfolioId = portfolio_id,
            buyingPowerId = form.data['buyingPowerId'],
            amount = form.data['amount'],
            type = form.data['type']
        )
        db.session.add(data)
        db.session.commit()
        return {'transaction': data.to_dict_transactions()}
    return form.errors
