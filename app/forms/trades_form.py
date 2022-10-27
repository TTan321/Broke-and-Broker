from flask_wtf import FlaskForm
from wtforms import IntegerField,SubmitField,FloatField,StringField
from wtforms.validators import DataRequired

class Trades_Form(FlaskForm):
    assetId = IntegerField('assetId')
    portfolioId = IntegerField('portfolioId')
    assetQuantity = FloatField('assetQuantity')
    amount = FloatField('amount', validators=[DataRequired()])
    type = StringField('Trade Type', validators=[DataRequired()])
    submit = SubmitField('submit')
