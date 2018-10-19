import * as React from 'react';
import { Tooltip, Card, Row, Col, Input, Icon, Form, Button, Slider } from 'antd'
import CoinSelect, { CoinSelectTypes } from './CoinSelect'

export interface ExecutionerProps {
}

export default class Executioner extends React.Component<ExecutionerProps, any> {
  public render() {
    return (
      <div>
        <Card style={{ width: '100%' }}>
          <Row type="flex" justify="space-around" align="top">
            <Col span={10} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%' }}>
                <CoinSelect type={CoinSelectTypes.FROM} />
                <Form.Item label="Min Price">
                  <Input size="large" />
                </Form.Item>
              </div>
            </Col>
            <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <Tooltip placement="top" title="Swap">
                <Icon style={{ fontSize: 18, marginTop: 50 }} type="swap" theme="outlined" />
              </Tooltip>
            </Col>
            <Col span={10} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%' }}>
                <CoinSelect type={CoinSelectTypes.TO} />
                <Form.Item label="Min Conversion Value">
                  <Input disabled size="large" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Form.Item label="Average Amount Per Trade">
            <Slider defaultValue={30} />
          </Form.Item>
        </Card>
        <Button block type="primary" size="large" style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          position: 'relative',
          bottom: 1,
        }}>START</Button>
      </div>
    );
  }
}
