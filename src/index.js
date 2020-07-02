const sourcePath = '~@bildvitta/quasar-app-extension-responsive/src/'
const resolve = (...paths) => paths.map(path => sourcePath + path)

const extendQuasar = quasar => {
  quasar.css.push(...resolve(
    'css/spaces.scss'
  ))
}

module.exports = function (api) {
  api.extendQuasarConf(extendQuasar)
}
