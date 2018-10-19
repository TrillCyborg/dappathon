import * as React from 'react';
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Executioner from './components/Executioner'
import DepositWithdrawModal, { DepositWithdrawType } from './components/DepositWithdrawModal'
import './App.css';
import './lib/scatter'

const AppRoot = styled.div`
  width: 100%;
  min-height: 100vh;
`

class App extends React.Component {
  public state = { modalOpen: false, modalType: '' }

  public toggleModal = (modalType?: DepositWithdrawType) =>
    this.setState({ modalOpen: !this.state.modalOpen, modalType: modalType || this.state.modalType })

  public render() {
    const { modalOpen, modalType } = this.state
    return (
      <AppRoot>
        <Header
          deposit={() => this.toggleModal(DepositWithdrawType.DEPOSIT)}
          withdraw={() => this.toggleModal(DepositWithdrawType.WITHDRAW)}
        />
        <Row style={{ margin: 26 }}>
          <Col span={12} style={{ padding: 15 }}>
            <Executioner />
          </Col>
          <Col span={12} style={{ padding: 15 }}>
            derp
          </Col>
        </Row>
        <DepositWithdrawModal
          open={modalOpen}
          type={modalType}
          close={this.toggleModal}
        />
      </AppRoot>
    );
  }
}

export default App;