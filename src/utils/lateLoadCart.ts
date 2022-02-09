export default async () => {
  const response = await fetch(`/no-cache-proxy/create-account`) // we use create account page because it doesn't contain lot of image assets
    .then((res) => {    
      console.log('RES', res);                                         // and has all data that is needed for us (cart, account etc.)
      return res;                                                // you can select any other page if you want with no-cache-proxy path
  });
  console.log("RESPONSE", response)
  let parsedHtml = document.createElement( 'html' );
  parsedHtml.innerHTML = await response.text();

  // replace cart counter data
  const newCartData = parsedHtml.querySelector('.header-main-minicart')?.innerHTML;
  const cartData = document.querySelector('.header-main-minicart');
  if (cartData && newCartData) {
    cartData.innerHTML = newCartData;
  }
};
