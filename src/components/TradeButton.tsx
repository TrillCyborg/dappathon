import styled from 'styled-components'

export interface TradeButtonProps {
  active?: boolean;
  color?: string;
}

const TradeButton = styled.div.attrs({
  color: (props: any) => {
    if (!props.active) {
      return '#bbb' // '#9e9e9e'
    } return '#4b85f7'
  },
})<TradeButtonProps>`
  width: 100%;
  color: #fff;
  background-color: ${props => props.color};
  cursor: pointer;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
`

export default TradeButton