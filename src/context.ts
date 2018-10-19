import * as React from 'react'

export const BalanceContext = React.createContext({
  balances: {
    EOS: null,
    SYS: null
  },
  setBalance: (balance: number, symbol: string) => {},
})