/////////// exported accounts /////////// 

export const icebergAccount = 'iceberg'
export const tokenAccount = 'eosio.token'

/////////// exported function function /////////// 

export const getUserBalance = async (eos, account, symbol) => {
    let balanceRes = await eos.getCurrencyBalance({
        account: icebergAccount,
        code: tokenAccount,
        symbol: symbol}
    )
    return parseFloat(balanceRes[0]);
}

export const getIcebergBalance = async (eos, symbol) => {
    let balanceRes = await eos.getCurrencyBalance({
        account: icebergAccount,
        code: tokenAccount,
        symbol: symbol} // should be something like 'EOS', 'SYS', 'BBNT'
    )
    let icebergBal = parseFloat(balanceRes[0])

    return icebergBal; 
}

export const getParams = async (eos) => {
    let params = await eos.getTableRows({
        code: icebergAccount,
        json: true,
        scope:icebergAccount,
        table:"params",
    })

    return params;
}

export const setParams = async (
        eos,
        avgTrade,
        minPrice,
        tokenCurrency,
        tokenContract
) => {
    await eos.transaction({
        actions: [{
            account: icebergAccount,
            authorization: [{ actor: icebergAccount, permission: 'active' }],
            data: {
                _avg_trade: avgTrade, // something like 10.0, 
                _eos_contract: tokenContract, // something like "eosio.token",
                _min_price: minPrice, // something like 0.0001,
                _token_contract: token_contract, // something like "eosio.token",
                _token_currency: tokenCurrency, // something like "0.0000 SYS",
                _user_account: "alice"
            },
            name: 'setparams',
        }]
    })
}

export const start = async (eos) => {
    await eos.transaction({
        actions: [{
            account: icebergAccount,
            authorization: [{ actor: icebergAccount, permission: 'active' }],
            data: {},
            name: 'start',
        }]
    })
}

export const stop = async (eos) => {
    await eos.transaction({
        actions: [{
            account: icebergAccount,
            authorization: [{ actor: icebergAccount, permission: 'active' }],
            data: {},
            name: 'start',
        }]
    })
}

export const trade = async (eos) => {

    await eos.transaction({
        actions: [{
            account: icebergAccount,
            authorization: [{ actor: icebergAccount, permission: 'active' }],
            data: {},
            name: 'trade',
        }]
    })
}

export const deposit = async (eos, userAccount, symbol, amount) => {

    // console.log("account name:", userAccount)
    let asset = amount.concat(" ").concat(symbol) 
 
    await eos.transfer(
            userAccount,
            icebergAccount,
            asset, //something like '0.0100 EOS',
            'm',
            {authorization: userAccount }
    )
}

export const withdraw = async (eos, userAccount, symbol, amount) => {

    // console.log("account name:", userAccount)
    let asset = amount.concat(" ").concat(symbol) 

    await eos.transaction({
        actions: [{
            account: icebergAccount,
            authorization: [{ actor: userAccount, permission: 'active' }],
            data: {
                from: icebergAccount, //from
                quantity: asset, //something like '0.0100 EOS',
                to: userAccount, //to
            },
            name: 'withdraw',
        }]
    })

}
