from flask_wtf import FlaskForm
from wtforms import IntegerField,FloatField,StringField
from wtforms.validators import DataRequired

class TradeForm(FlaskForm):
    assetId = IntegerField('assetId')
    assetQuantity = FloatField('assetQuantity', validators=[DataRequired()])
    amount = FloatField('amount', validators=[DataRequired()])
    type = StringField('Trade Type', validators=[DataRequired()])
