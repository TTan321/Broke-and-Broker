from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,SubmitField
from wtforms.validators import DataRequired

class WatchlistForm(FlaskForm):
    portfolioId = IntegerField('portfolioId', validators=[DataRequired()])
    name = StringField('Name of Watchlist', validators=[DataRequired()])
    assetId = IntegerField('assetId', validators=[DataRequired()])
    submit = SubmitField('submit')
