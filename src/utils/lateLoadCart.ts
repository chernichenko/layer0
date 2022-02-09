export default async () => {
  const response = await fetch(`/no-cache-proxy/create-account`) // we use create account page because it doesn't contain lot of image assets
    .then((res) => {    
      return res;                                                // you can select any other page if you want with no-cache-proxy path
  });
  let parsedHtml = document.createElement( 'html' );
  console.log('RESPONSE', response)
  console.log('RESPONSE TEXT', await response.text())
  parsedHtml.innerHTML = await response.text();

  // replace cart counter data
  const newCartData = parsedHtml.querySelector('.header-main-minicart')?.innerHTML;
  const cartData = document.querySelector('.header-main-minicart');
  if (cartData && newCartData) {
    cartData.innerHTML = newCartData;
  }
};
