import WertWidget from '@wert-io/widget-initializer';
import { signSmartContractData } from '@wert-io/widget-sc-signer';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer/';
window.Buffer = Buffer; // needed to use `signSmartContractData` in browser
if (window.ethereum) {
  (async () => {
    const privateKey = '50bf5b817818664165f60afc94f013684b3d3af949d7042fd88a84470240d7a3';
    const signedData = signSmartContractData({
      address: '0x23c5C4e3e1CF4eB9e3D0494660f196d20CBB9C98',
      commodity: 'ETH',
      network: 'Goerli',
      commodity_amount: '0.005',
      sc_address: '0x3B2305502BD6F8B1EB2Ed474Ac15c61c6702b18B',
      sc_input_data: '0x9dae76ea0000000000000000000000000000000000000000000000000000000000000043000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000ffffffe1',
    }, privateKey);
    const otherWidgetOptions = {
      partner_id: '01F2P4AHDE58JN10ME1P8GFFVT',
      click_id: uuidv4(), // unique id of purhase in your system
      origin: 'https://dev.sha2.me', // this option needed only in sandbox
      // theme: 'dark'
    };
    const nftOptions = {
      extra: {
        item_info: {
          author: "MEOW",
          author_image_url: "https://source.unsplash.com/collection/12276674",
          image_url:
            "https://source.unsplash.com/collection/12276674",
          name: "Wert Sample NFT",
          seller: "Wert",
        }
      },
    };
    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
      ...nftOptions,
    });
    wertWidget.mount();
  })()
}