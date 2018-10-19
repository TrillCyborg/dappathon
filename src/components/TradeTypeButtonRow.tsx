import * as React from 'react';
import TradeTypeButton, { TradeTypeButtonTypes } from './TradeTypeButton'

export interface TradeTypeButtonRowProps {
  tradeType: TradeTypeButtonTypes;
  setTradeType: (tradeType: TradeTypeButtonTypes) => void;
}

export default class TradeTypeButtonRow extends React.Component<TradeTypeButtonRowProps, any> {
  public render() {
    const { tradeType, setTradeType } = this.props
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <TradeTypeButton
          active={tradeType === TradeTypeButtonTypes.BUY}
          left
          type={TradeTypeButtonTypes.BUY}
          onClick={() => setTradeType(TradeTypeButtonTypes.BUY)}
        >
          <span style={{ fontWeight: 'bold', fontSize: 22 }}>BUY</span>
        </TradeTypeButton>
        <TradeTypeButton
          active={tradeType ===TradeTypeButtonTypes.SELL}
          right
          type={TradeTypeButtonTypes.SELL}
          onClick={() => setTradeType(TradeTypeButtonTypes.SELL)}
        >
          <span style={{ fontWeight: 'bold', fontSize: 22 }}>SELL</span>
        </TradeTypeButton>
      </div>
    );
  }
}
