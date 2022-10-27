from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,TextAreaField,SubmitField,FloatField
from wtforms.validators import DataRequired

class PortfolioForm(FlaskForm):
    ownerId = IntegerField('ownerId')
    accountName = StringField('accountName', validators=[DataRequired()])
    tradeId = IntegerField('tradeId')
    buyingPowerId = IntegerField('buyingPowerId')
    watchlistId = IntegerField('watchlistId')
