


function Transactions() {

    return (
        <div>
            <form>
                <label>Transactions</label>
                <select>
                    <option value="deposit">Deposit</option>
                    <option value="withdraw">Withdraw</option>
                </select>
                <input
                    type="text"
                />
                <button type="submit">Submit Transactions</button>
            </form>
        </div>
    )
}

export default Transactions
