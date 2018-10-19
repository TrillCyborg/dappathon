import * as React from 'react';
import { Modal, Input } from 'antd'
import CoinSelect, { CoinSelectTypes } from './CoinSelect'
// import EOS from '../lib/eos'

// const eos = new EOS()

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
  public render() {
    // type === DepositWithdrawType.WITHDRAW ? CoinSelectTypes.WITHDRAW : CoinSelectTypes.DEPOSIT}
    const { type, close, open } = this.props
    const { coin, amount } = this.state
    console.log({ coin, amount })
    return (
      <Modal
        title={type}
        visible={open}
        onOk={() => {
          // if (type === DepositWithdrawType.DEPOSIT) {
          //   eos.deposit(coin, amount)
          // } else if (type === DepositWithdrawType.WITHDRAW) {
          //   eos.withdraw(coin, amount)
          // }
        }}
        onCancel={() => {
          this.setState(DEFAULT_STATE)
          close()
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
    );
  }
}