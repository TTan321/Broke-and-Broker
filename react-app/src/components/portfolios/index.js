import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAStock } from "../../store/finnhub"
import { loadUserPortfolios } from "../../store/portfolio"


function Portfolio() {
    const dispatch = useDispatch()
    const portfolio = useSelector(state => state.portfolioState)
    const stock = useSelector(state => state.assetState)

    useEffect(() => {
        dispatch(loadUserPortfolios)
        dispatch(loadAStock())
    }, [dispatch])

    console.log('stockstate', stock)

    return (
        <div>
            Portfolio Detail Page
        </div>
    )
}

export default Portfolio
