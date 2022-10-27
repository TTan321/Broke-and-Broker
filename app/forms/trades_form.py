from flask_wtf import FlaskForm
from wtforms import IntegerField,SubmitField,FloatField,StringField
from wtforms.validators import DataRequired

from app.models import portfolio

class Trades_Form(FlaskForm):
    assetId = IntegerField('assetId')
    portfolioId = IntegerField('portfolioId')
    assetQuantity = FloatField('assetQuantity')
    amount = FloatField('amount')
    type = StringField('Trade Type')
    submit = SubmitField('submit')
