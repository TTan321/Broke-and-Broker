from flask_wtf import FlaskForm
from wtforms import StringField,FloatField
from wtforms.validators import DataRequired

class TransactionsForm(FlaskForm):
    amount = FloatField('amount', validators=[DataRequired()])
    type = StringField('Transaction Type', validators=[DataRequired()])
