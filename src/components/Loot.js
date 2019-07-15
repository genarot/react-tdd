import React from 'react';
import {connect} from "react-redux";
import {fetchBitCoin} from "../store/actions/bitcoin";

export const Loot = ({fetchBitCoin, bitcoin, balance}) => {
    React.useEffect(() => {
        // console.log(fetchBitCoin, bitcoin)
        fetchBitCoin();
    },[]);
    const computeBitcoin = () => {
        if ( Object.keys(bitcoin).length === 0 ) return ''
        else
            return balance / parseInt(bitcoin.bpi.USD.rate.replace(',',''), 10);
    }
    return (
        <div>
            <h3>Bitcoin balance: {computeBitcoin()}</h3>
        </div>
    );
};

const mapStateToProps = (state ) => ({
    ...state
});
const mapDispatchToProps = {
    fetchBitCoin
}
export default connect(mapStateToProps, mapDispatchToProps)(Loot);
