import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Smart Hedge ', {
      clientId: '2ojwPSiTgaJdbnZArQKe2AwakT5b4wjrDjp',
      network: 'rinkeby',
      signer: SimpleSigner('6acb48a3cef6a85a85a33ec85704d050bcdef38aea571fa80dd4d10345792a4f')
    })