import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getACandle } from '../../store/candles';
import { loadAStock } from '../../store/finnhub';
import Navigation from '../navigation';
import './StockDetail.css'

function StockDetail() {
    const dispatch = useDispatch();
    const { ticker } = useParams();
    const stock = useSelector(state => state.assetState);
    // const candle = useSelector(state => state.candleState);
    const stocksArr = Object.values(stock);
    const currentStock = stocksArr.find(stock => stock.symbol === ticker);

    // console.log('candle', candle)

    // useEffect(() => {
    //     const getStockPrices = setInterval(() => {
    //         dispatch(loadAStock())
    //     }, 2000)
    //     return () => clearInterval(getStockPrices)
    // }, [])

    useEffect(() => {
        dispatch(loadAStock())
        // dispatch(getACandle())
    }, [dispatch])

    return currentStock && (
        <div>
            <Navigation />
            <div id='stockDetailPage'>
                <div>
                    <h2>{currentStock.name}</h2>
                    <p>${currentStock.current_price.toFixed(2)}</p>
                    <p>{currentStock.price_change_percentage_24h.toFixed(2)}% ({currentStock.price_change_24h.toFixed(2)})</p>
                </div>
            </div>
        </div>
    )
}

export default StockDetail
