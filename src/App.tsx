import * as React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Executioner from './components/Executioner'
import DepositWithdrawModal, { DepositWithdrawType } from './components/DepositWithdrawModal'
import CoinList from './components/CoinList'
import { BalanceContext } from './context'
import './App.css';
import './lib/scatter'

const AppRoot = styled.div`
  width: 100%;
  min-height: 100vh;
`

class App extends React.Component {
  public state = { modalOpen: false, modalType: '', balances: { EOS: null, SYS: null } }

  public toggleModal = (modalType?: DepositWithdrawType) =>
    this.setState({ modalOpen: !this.state.modalOpen, modalType: modalType || this.state.modalType })

  public setBalance = (balance: number, symbol: string) => this.setState({
    ...this.state,
    balances: {
      ...this.state.balances,
      [symbol]: balance,
    }
  })

  public render() {
    const { modalOpen, modalType, balances } = this.state
    return (
      <BalanceContext.Provider value={{
        balances,
        setBalance: this.setBalance
      }}>
        <AppRoot>
          <Header
            deposit={() => this.toggleModal(DepositWithdrawType.DEPOSIT)}
            withdraw={() => this.toggleModal(DepositWithdrawType.WITHDRAW)}
          />
          <Row style={{ margin: 26 }}>
            <Col span={4} style={{ padding: 15 }}>
              <CoinList setBalance={this.setBalance} balances={this.state.balances} />
            </Col>
            <Col span={10} style={{ padding: 15 }}>
              <Executioner />
            </Col>
            <Col span={10} style={{ padding: 15 }}>
              derp
            </Col>
          </Row>
          <DepositWithdrawModal
            open={modalOpen}
            type={modalType}
            close={this.toggleModal}
          />
        </AppRoot>
      </BalanceContext.Provider>
    );
  }
}

export default App;