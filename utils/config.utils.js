import { appConfig as appConfigUtil } from './appConfig'

const setConfigs = () => {
  if (process.browser) {
    const { OPEN_JS_CONFIG } = window
    appConfigUtil.setConfig(OPEN_JS_CONFIG)
  }
} 

const getConfig = () => {
  return appConfigUtil.getConfig()
}

export { setConfigs, getConfig }