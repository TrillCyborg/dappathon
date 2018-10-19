import * as React from 'react';
import { Select, Form } from 'antd'

const Option = Select.Option

export enum CoinSelectTypes {
  TO = 'To Coin',
  FROM = 'From Coin',
  DEPOSIT = 'Deposit Coin',
  WITHDRAW = 'Withdraw Coin',
}

export interface CoinSelectProps {
  type: CoinSelectTypes;
  size?: "default" | "small" | "large" | undefined
}

export default class CoinSelect extends React.Component<CoinSelectProps, any> {
  public render() {
    const { type, size } = this.props
    return (
      <Form.Item label={type}>
        <Select size={size || 'large'} style={{ width: '100%' }}>
          <Option value="lucy">lucy</Option>
        </Select>
      </Form.Item>
    );
  }
}
