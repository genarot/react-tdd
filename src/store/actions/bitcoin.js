import {FETCH_BITCOIN} from './constants';

export const fetchBitCoin = () => async (dispatch, getState) => {

    const resp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const json = await resp.json();
    dispatch({type: FETCH_BITCOIN, bitcoin: json});
}
