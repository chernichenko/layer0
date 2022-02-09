import cheerio from 'cheerio'
import Response from '@layer0/core/router/Response'
import Request from '@layer0/core/router/Request'
import { injectBrowserScript } from '@layer0/starter'
// uncomment this line to enable replacePersonalizedData
import replacePersonalizedData from './utils/replacePersonalisedData'

export default function transform(response: Response, request: Request) {
  // inject browser.ts into the document returned from the origin
  injectBrowserScript(response)

  if (response.body) {
    const $ = cheerio.load(response.body)

    // This script is added using server side transformation just for Proof of Concept purposes.
    // For production this script should be included in original website base code.
    // However it can work here as well
    $('head').append(`
      <script src="/main.js" defer="defer"></script>
    `)

    // Relativizing all links
    $('a').map((i, el) => {
      const oldHref = $(el).attr('href') || ''
      const newHref = oldHref.replace('https://www.lushusa.com/', '/')
      $(el).attr('href',newHref)
    })

    // PLP relativizing image SRCs
    $('img.component-image.position-absolute.promotion-impression-img').first().map((i, el) => {
      const oldSrc = $(el).attr('src')?.trim() || ''
      const newSrc = oldSrc.replace('https://www.lushusa.com/', '/')
      $(el).attr('src',newSrc)
    })
    $('.plp-banner-top-inner img.plp-banner-top-image').first().map((i, el) => {
      const oldSrc = $(el).attr('src')?.trim() || ''
      const newSrc = oldSrc.replace('https://www.lushusa.com/', '/')
      $(el).attr('src',newSrc)
    })
    $('.search-results .product-tile-image.lazyload').map((i, el) => {
      const dataSrc = $(el).attr('data-src') || "";
      const newUrl = dataSrc?.replace('https://www.lushusa.com/', '/')
      $(el).attr('src', newUrl)
           .attr('data-src', newUrl)
    })

    // PDP


    // uncomment this line to enable replacePersonalizedData
    replacePersonalizedData($)

    response.body = $.html()
  }
}
