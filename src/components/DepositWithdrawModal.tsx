import * as React from 'react';
import { Modal, Input } from 'antd'
import CoinSelect, { CoinSelectTypes } from './CoinSelect'

export enum DepositWithdrawType {
  DEPOSIT = 'Deposit',
  WITHDRAW = 'Withdraw',
}

export interface DepositWithdrawModalProps {
  type: string;
  open: boolean;
  close: () => void;
}

export default class DepositWithdrawModal extends React.Component<DepositWithdrawModalProps, any> {
  public render() {
    // type === DepositWithdrawType.WITHDRAW ? CoinSelectTypes.WITHDRAW : CoinSelectTypes.DEPOSIT}
    const { type, close, open } = this.props
    return (
      <Modal
        title={type}
        visible={open}
        onOk={() => console.log('OK')}
        onCancel={() => close()}
      >
        <CoinSelect size="default" type={CoinSelectTypes[type.toUpperCase()] as CoinSelectTypes} />
        <Input placeholder={`${type} Amount`} />
      </Modal>
    );
  }
}