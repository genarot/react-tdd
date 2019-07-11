import {FETCH_BITCOIN} from './constants';

export const fetchBitCoin = ( dispatch, getState ) => {

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(resp => resp.json())
        .then(json => dispatch({type: FETCH_BITCOIN, bitcoin: json}))
}
