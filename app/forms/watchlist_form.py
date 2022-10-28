from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired

class WatchlistForm(FlaskForm):
    name = StringField('Name of Watchlist', validators=[DataRequired()])
    assetId = IntegerField('assetId', validators=[DataRequired()])
