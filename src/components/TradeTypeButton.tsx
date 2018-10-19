import styled, { css } from 'styled-components'
import TradeButton, { TradeButtonProps } from './TradeButton'

export enum TradeTypeButtonTypes {
  BUY = 'BUY',
  SELL = 'SELL',
}

export interface TradeTypeButtonProps extends TradeButtonProps {
  left?: boolean;
  right?: boolean;
  type: TradeTypeButtonTypes;
}

const TradeTypeButton = styled(TradeButton).attrs({
  color: (props: any) => {
    if (!props.active) {
      return '#bbb' // '#9e9e9e'
    }
    switch(props.type) {
      case TradeTypeButtonTypes.BUY:
        return '#42c241'
      case TradeTypeButtonTypes.SELL:
        return '#e04a4a'
      default:
        return '#000'
    }
  },
})<TradeTypeButtonProps>`
  border-width: 0px;
  border-style: solid;
  background-color: ${props => props.color};

  ${props => props.left && css`
    border-top-left-radius: 16px;
    border-right-width: 0.5px;
    border-right-color: #fff;
  `}
  ${props => props.right && css`
    border-top-right-radius: 16px;
    border-left-width: 0.5px;
    border-left-color: #fff;
  `}
`

export default TradeTypeButton