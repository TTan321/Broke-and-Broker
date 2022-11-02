from tokenize import StringPrefix
from flask_wtf import FlaskForm
from wtforms import FloatField,StringField

class AssetsForm(FlaskForm):
    name = StringField('name of asset')
    ticker = StringField('ticker symbol of asset')
