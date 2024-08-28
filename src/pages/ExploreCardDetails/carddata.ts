// src/data/CardData.ts

import logo2 from '../../assets/images/cardlogo2.png'
import logo3 from '../../assets/images/cardlogo3.png'
import logo4 from '../../assets/images/cardlogo4.png'
import logo5 from '../../assets/images/cardlogo5.png'
import logo6 from '../../assets/images/cardlogo6.png'
import logo7 from '../../assets/images/cardlogo7.png'

export interface Card {
    img: string;
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
    desc4: string;
  }
  
  export const cardData: Card[] = [
    {
      img: logo2,
      title: 'CryptoFace Fund',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo3,
      title: "Sensei's Top Tier",
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo4,
      title: 'UltraRun',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo5,
      title: 'RWA Fund',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo6,
      title: 'Pandora',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo7,
      title: 'Mega Cap Market Fund',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo2,
      title: 'CryptoFace Fund',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo3,
      title: "Sensei's Top Tier",
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    },
    {
      img: logo4,
      title: 'UltraRun',
      desc1: 'Ticker: TEX',
      desc2: 'Assets: SOL, BTCB, PENDLE, ATOM, BEAM, FIL, ORAI, FET',
      desc3: 'Expected Returns: Conservative',
      desc4: 'Transaction Fees: 2.5'
    }
    // Add other card objects here
  ];
  