from flask import Blueprint, request
from ..forms import BuyingPowerForm
from ..models import db, Buying_Power
from flask_login import current_user


buying_power_routes = Blueprint('buying_power', __name__)


@buying_power_routes.route('/<int:portfolio_id>')
def get_buying_power(portfolio_id):
    portfolio_buying_power = Buying_Power.query.filter(Buying_Power.portfolio_id == portfolio_id)[0]
    if portfolio_buying_power:
        return {'portfolioBuyingPower': portfolio_buying_power.to_dict_buying_powers_rel()}
    return {'message':'no such buying power exist for provided portfolio id'}

@buying_power_routes.route('<int:portfolio_id>', methods=['PUT'])
def edit_buying_power(portfolio_id):
    portfolio_buying_power = Buying_Power.query.filter(Buying_Power.portfolio_id == portfolio_id)[0]
    form = BuyingPowerForm()
    if portfolio_buying_power:
        portfolio_buying_power.amount = portfolio_buying_power.amount + form.data['amount']
        return {'portfolioBuyingPower': portfolio_buying_power.to_dict_buying_powers_rel()}
    return {'message':'no such buying power exist for provided portfolio id'}
