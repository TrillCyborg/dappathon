import * as React from 'react'

export const BalanceContext = React.createContext({
  balances: {
    EOS: 0,
    BBNT: 0
  },
  balancesLoading: false,
  setBalance: (balance: number, symbol: string) => {},
  setLoading: (bool: boolean) => {}
})