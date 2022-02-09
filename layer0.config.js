module.exports = {
  routes: './src/routes.ts',
  connector: '@layer0/starter',
  backends: {
    origin: {
      domainOrIp: process.env.DOMAIN_OR_IP || 'www.lushusa.com',
      hostHeader: process.env.HOST_HEADER || 'www.lushusa.com',
      // disableCheckCert: true // disable this line before goin to production
    },
  },
}
