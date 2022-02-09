import install from '@layer0/prefetch/window/install'
import installDevtools from '@layer0/devtools/install'
// uncomment this line to enable lateLoadCart
import lateLoadCart from './utils/lateLoadCart'

document.addEventListener('DOMContentLoaded', async function () {

  // The XDN Devtools is a widget that helps developers understand how their site interacts with the XDN
  // For more details see - https://developer.moovweb.com/guides/devtools
  // Comment out for easier speed measurements
  installDevtools()

  // @ts-ignore
  install({

    includeCacheMisses: true, // DISABLE THIS LINE IN PRODUCTION

    // watch: [
    //   {
    //     selector: '.child-loaded',
    //     callback: (el) => {
    //       const url = el.getAttribute('href')
    //       if (url) prefetch(url, 'fetch')
    //     },
    //   },
    //   {
    //     selector: '[mw-data-src]',
    //     callback: el => {
    //       el.setAttribute('src', el.getAttribute('mw-data-src'))
    //     }
    //   },
    // ],

  })

  // uncomment these lines to enable lateLoadCart
  await Promise.all([
    lateLoadCart(),
  ]);
})
