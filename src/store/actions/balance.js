import * as constants from './constants';

export const setBalance = (newBalance) => ({type: constants.SET_BALANCE, balance: newBalance});

export const deposit = (deposit) => ({type: constants.DEPOSIT, deposit});

export const withDraw = (withDrawal) => ({type: constants.WITHDRAW, withDrawal});
