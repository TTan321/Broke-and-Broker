from wsgiref.validate import validator
from flask_wtf import FlaskForm
from wtforms import StringField,FloatField
from wtforms.validators import DataRequired

class PortfolioForm(FlaskForm):
    accountName = StringField('accountName', validators=[DataRequired()])

class EditPortfolioForm(FlaskForm):
    accountName = StringField('accountName', validators=[DataRequired()])
    buyingPower = FloatField('buyingPower', validators=[DataRequired()])
