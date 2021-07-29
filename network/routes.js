const networkCountry = require('../components/country/network')

const routes = (server) => {
  server.use('/country', networkCountry)
}

module.exports = routes