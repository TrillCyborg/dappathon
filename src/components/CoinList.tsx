import * as React from 'react';
import { Card, Avatar, List, Skeleton } from 'antd'
// import EOS from '../lib/eos'
import { COINS } from '../consts'

export interface CoinListProps {
  setBalance: (balance: number, symbol: string) => void,
  balances: any;
}

export default class CoinList extends React.Component<CoinListProps, any> {
  public state = { loading: true }

  public async componentDidMount() {
    // const { setBalance } = this.props
    // const eos = new EOS()
    // this.setState({ loading: true })
    // await Promise.all(COINS.map(async (coin) => {
    //   const balance = await eos.getUserBalance(coin.symbol)
    //   setBalance(balance, coin.symbol)
    // }))
    // this.setState({ loading: false })
  }

  public render() {
    const { balances } = this.props
    const { loading } = this.state
    return (
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={COINS}
          renderItem={(coin: any) => (
            <List.Item>
              <Skeleton loading={loading} active avatar paragraph={false}>
                <List.Item.Meta
                  avatar={<Avatar src={coin.icon} />}
                  title={coin.title}
                  description={balances[coin.symbol]}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    );
  }
}
