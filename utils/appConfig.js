const appConfig = (function() {
  let APP_CONFIG = {}

  return {
    setConfig: function(appConfig) {
      APP_CONFIG = appConfig
    },
    getConfig: function() {
      return APP_CONFIG
    }
  }
})()

export default appConfig