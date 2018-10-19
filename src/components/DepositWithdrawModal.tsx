import * as React from 'react';
import { Modal, Input } from 'antd'
import CoinSelect, { CoinSelectTypes } from './CoinSelect'
import { BalanceContext } from '../context'

export enum DepositWithdrawType {
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
}

export interface DepositWithdrawModalProps {
  type: string;
  open: boolean;
  close: () => void;
}

const DEFAULT_STATE = {
  coin: '',
  amount: undefined,
}

export default class DepositWithdrawModal extends React.Component<DepositWithdrawModalProps, any> {
  public state = DEFAULT_STATE

  // public componentDidMount = () => {
  //   this.eos = new EOS()
  // }

  public render() {
    // type === DepositWithdrawType.WITHDRAW ? CoinSelectTypes.WITHDRAW : CoinSelectTypes.DEPOSIT}
    const { type, close, open } = this.props
    const { coin, amount } = this.state
    console.log('open', open)
    return (
      <BalanceContext.Consumer>
        {({ balances, setBalance, setLoading }) => (
          <Modal
            title={type}
            visible={open}
            onOk={() => {
              if (coin && amount) {
                setLoading(true)
                if (type === DepositWithdrawType.DEPOSIT) {
                  setBalance(balances[coin] + parseInt(amount as any, 10), coin)
                } else if (type === DepositWithdrawType.WITHDRAW) {
                  setBalance(balances[coin] - parseInt(amount as any, 10), coin)
                }
                close()
                setTimeout(() => setLoading(false), 1000)
              }
            }}
            okButtonDisabled={!coin || !amount}
            onCancel={() => {
              this.setState(DEFAULT_STATE)
            }}
          >
            <CoinSelect
              size="default"
              type={CoinSelectTypes[type.toUpperCase()] as CoinSelectTypes}
              onChange={(value: any) => this.setState({ coin: value })}
              value={coin}
            />
            <Input
              type="number"
              value={amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
              placeholder={`${type} Amount`}
            />
          </Modal>
        )}
      </BalanceContext.Consumer>
    );
  }
}