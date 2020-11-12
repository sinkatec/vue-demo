const isPro = Object.is(process.env.MODE_ENV,'production')
module.exports = {
    baseUrl: isPro ? 'http://192.168.0.186:5000/api/' : 'api/'
}