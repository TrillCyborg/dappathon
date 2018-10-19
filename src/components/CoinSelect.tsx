import * as React from 'react';
import { Select, Form, Avatar } from 'antd'
import { COINS } from '../consts'

const Option = Select.Option

export enum CoinSelectTypes {
  TO = 'To Coin',
  FROM = 'From Coin',
  DEPOSIT = 'Deposit Coin',
  WITHDRAW = 'Withdraw Coin',
}

export interface CoinSelectProps {
  type: CoinSelectTypes;
  size?: "default" | "small" | "large" | undefined;
  onChange?: (value: any) => void;
  value?: any;
}

export default class CoinSelect extends React.Component<CoinSelectProps, any> {
  public state = { coinValue: '' }

  public handleChange = (value: any) => this.setState({ value })

  public render() {
    const { type, size, onChange, value } = this.props
    const { coinValue } = this.state
    return (
      <Form.Item label={type}>
        <Select size={size || 'large'} style={{ width: '100%' }} value={value || coinValue} onChange={onChange || this.handleChange}>
          {COINS.map((coin: any) => (
            <Option value={coin.symbol}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar size="small" src={coin.icon} style={{ marginRight: 7 }} />
                <span>{coin.name}</span>
              </div>
            </Option>
          ))}
        </Select>
      </Form.Item>
    );
  }
}
