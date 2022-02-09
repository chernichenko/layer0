import cheerio from 'cheerio';
import { cartCounter } from './html/cartCounter';

const replacePersonalizedData = ($: cheerio.Root) => {
  $('.header-main-minicart').html(cartCounter);
};

export default replacePersonalizedData;
