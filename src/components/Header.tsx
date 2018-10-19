import * as React from 'react';
import styled from 'styled-components'
import { Button } from 'antd'

const HeaderRoot = styled.div`
  height: 64px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #001529;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export interface HeaderProps {
  deposit: () => void;
  withdraw: () => void;
}

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    const { deposit, withdraw } = this.props
    return (
      <HeaderRoot>
        <div style={{ color: '#fff' }}>Iceberg</div>
        <div>
          <Button onClick={() => deposit()} type="primary" style={{ marginRight: 15 }}>Deposit</Button>
          <Button onClick={() => withdraw()} type="primary">Withdraw</Button>
        </div>
      </HeaderRoot>
    );
  }
}
