/* tslint:disable */
import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import * as eos from 'eosjs'
import * as Services from './eos'
import store from '../store'

const network =  {
  protocol: "http",
  blockchain: "eos",
  host: "127.0.0.1",
  port: 8899,
  chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f"
}

// Don't forget to tell ScatterJS which plugins you are using.
ScatterJS.plugins(new ScatterEOS());

ScatterJS.scatter.connect(Services.icebergAccount).then(connected => {
  // User does not have Scatter Desktop, Mobile or Classic installed.
  if(!connected) return false;

  const scatter = ScatterJS.scatter;
  const getIdentity = async () => {
      const requiredFields = {
        accounts: [ network ]
      };

      try {
        console.log('CHECK 01')
        const identity = await scatter.getIdentity(requiredFields)
        console.log('CHECK 02')
        console.log(identity, "identityFound")
          // do not assign to window in actual projects... only for learning.
          window.identity = identity

          console.log('identity', identity)
          // User "Accept" action

          /////////////////////////////////////////
          // TODO - move from here to the right place
          // const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

          // Services.getUserBalance(eos, account, "SYS").then( value => {
          // //   console.log(account.name, " holdings :", value)
          // })

          // Services.trade(
          //     window.eos,
          //     account.name,
          //     "EOS",
          //     "0.1000",
          //     "SYS"
          // )

          /////////////////////////////////////////

      } catch(e) {
        console.error(e, "identityCrisis!")
      }
      console.log('CHECK 03')
  }

  store.dispatch({
    type: 'SET_SCATTER',
    payload: ScatterJS.scatter
  })

  window.ScatterJS = null;

  getIdentity()
});







// document.addEventListener('scatterLoaded', scatterExtension => {
//   const getIdentity = () => {

//     const requiredFields = { accounts: [ network ] };

//     scatter.getIdentity(requiredFields).then((identity) => {
//     //   console.log(identity, "identityFound")
//       // do not assign to window in actual projects... only for learning.
//       window.identity = identity
//       // User "Accept" action

//       /////////////////////////////////////////
//       // TODO - move from here to the right place
//       const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

//       Services.getUserBalance(eos, account, "SYS").then( value => {
//         //   console.log(account.name, " holdings :", value)
//       })

//       Services.trade(
//           window.eos,
//           account.name,
//           "EOS",
//           "0.1000",
//           "SYS"
//       )

//       /////////////////////////////////////////
    
//     }).catch((error) => {
//       console.error(error, "identityCrisis!")
//     })
//   }

//   const scatter = window.scatter
//   getIdentity()

//   const network =  {
//     protocol: "http",
//     blockchain: "eos",
//     host: '127.0.0.1',
//     port: 8899,
//     chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f"
//   }

//   const eosOptions = {}
//   const eos = scatter.eos(
//     network,
//     eos,
//     eosOptions,
//     network.protocol
//   );
//   window.eos = eos
// })