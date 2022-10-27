from flask import Blueprint, request
from ..forms import BuyingPowerForm
from ..models import db, Buying_Power
from flask_login import current_user


buying_power_routes = Blueprint('buying_power', __name__)


@buying_power_routes.route('/')
def get_buying_power():
