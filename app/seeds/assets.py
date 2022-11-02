from app.models import db, Asset


# Adds a demo user, you can add other users here if you want
def seed_assets():
    bitcoin = Asset(name='bitcoin', ticker='btc')
    ethereum = Asset(name='ethereum', ticker='eth')
    tether = Asset(name='tether', ticker='usdt')
    bnb = Asset(name='bnb', ticker='bnb')
    usd_coin = Asset(name='usd coin', ticker='usdc')
    xrp = Asset(name='xrp', ticker='xrp')
    binance_usd = Asset(name='binance_usd', ticker='busd')
    dogecoin = Asset(name='dogecoin', ticker='doge')
    cardano = Asset(name='cardano', ticker='ada')
    solana = Asset(name='solana', ticker='sol')
    polygon = Asset(name='polygon', ticker='matic')
    polkadot = Asset(name='polkadot', ticker='dot')
    shiba_inu = Asset(name='shiba inu', ticker='shib')
    dai = Asset(name='dai', ticker='dai')
    tron = Asset(name='tron', ticker='trx')
    avalanche = Asset(name='avalanche', ticker='avax')
    uniswap = Asset(name='uniswap', ticker='uni')
    wrapped_bitcoin = Asset(name='wbtc', ticker='wbtc')
    unus_sed_leo = Asset(name='unus sed leo', ticker='leo')
    cosmos = Asset(name='cosmos', ticker='atom')
    litecoin = Asset(name='litecoin', ticker='ltc')
    chainlink = Asset(name='chainlink', ticker='link')
    ftx_token = Asset(name='ftx token', ticker='ftt')
    ethereum_classic = Asset(name='ethereum classic', ticker='etc')
    cronos = Asset(name='cronos', ticker='cro')
    stellar = Asset(name='stellar', ticker='xlm')
    moreno = Asset(name='moreno', ticker='xmr')
    algorand = Asset(name='algorand', ticker='algo')
    near_protocol = Asset(name='near protocol', ticker='near')
    bitcoin_cash = Asset(name='bitcoin cash', ticker='bch')

    db.session.add(bitcoin)
    db.session.add(ethereum)
    db.session.add(tether)
    db.session.add(bnb)
    db.session.add(usd_coin)

    db.session.add(xrp)
    db.session.add(binance_usd)
    db.session.add(dogecoin)
    db.session.add(cardano)
    db.session.add(solana)

    db.session.add(polygon)
    db.session.add(polkadot)
    db.session.add(shiba_inu)
    db.session.add(dai)
    db.session.add(tron)

    db.session.add(avalanche)
    db.session.add(uniswap)
    db.session.add(wrapped_bitcoin)
    db.session.add(unus_sed_leo)
    db.session.add(cosmos)

    db.session.add(litecoin)
    db.session.add(chainlink)
    db.session.add(ftx_token)
    db.session.add(ethereum_classic)
    db.session.add(cronos)

    db.session.add(stellar)
    db.session.add(moreno)
    db.session.add(algorand)
    db.session.add(near_protocol)
    db.session.add(bitcoin_cash)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_assets():
    db.session.execute('TRUNCATE assets RESTART IDENTITY CASCADE;')
    db.session.commit()
