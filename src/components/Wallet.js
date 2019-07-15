import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deposit, withDraw} from '../store/actions/balance';

export class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }

    onInputChange = (evt) => {
        this.setState({balance: evt.target.value ? +evt.target.value : 0})
    };

    deposit = () => this.props.deposit(this.state.balance);
    withDraw = () => this.props.withDraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className={"balance"}>Wallet balance {this.props.balance}.</h3>
                <br/>
                <input value={this.state.value}
                       onChange={this.onInputChange} type="text" name="wallet" id="wallet"
                       className={"input-wallet"}/>
                <button
                    type="button"
                    className={"btn-deposit"}
                    onClick={this.deposit} >
                    Deposit
                </button>
                <button
                    type="button"
                    className={"btn-withdraw"}
                    onClick={this.withDraw} >
                    Withdraw
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deposit,
    withDraw
}
export default connect(state => ({balance: state.balance}), mapDispatchToProps)(Wallet);
