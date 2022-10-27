from flask_wtf import FlaskForm
from wtforms import IntegerField,SubmitField,FloatField
from wtforms.validators import DataRequired

class BuyingPowerForm(FlaskForm):
    portfolioId = IntegerField('portfolioId', validators=[DataRequired()])
    transactionId = IntegerField('transactionId')
    tradeId = IntegerField('tradeId')
    amount = FloatField('amount')
    submit = SubmitField('submit')
