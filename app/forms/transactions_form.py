from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SubmitField,FloatField
from wtforms.validators import DataRequired

class TransactionsForm(FlaskForm):
    buyingPowerId = IntegerField('buyingPowerId')
    amount = FloatField('amount', validators=[DataRequired()])
    type = StringField('Transaction Type', validators=[DataRequired()])
    submit = SubmitField('submit')
