from tokenize import StringPrefix
from flask_wtf import FlaskForm
from wtforms import SubmitField,FloatField,StringField

class AssetsForm(FlaskForm):
    name = StringField('name of asset')
    ticker = StringField('ticker symbol of asset')
    value = FloatField('value of asset')
    submit = SubmitField('submit')
