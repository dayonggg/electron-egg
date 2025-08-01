/**
 * Definition of communication channel between main process and rendering process
 * format：controller/filename/method
 * Definition of communication channels between main process and rendering process
 */
const ipcApiRoute = {
  framework: {
    checkForUpdater: 'controller/framework/checkForUpdater',
    downloadApp: 'controller/framework/downloadApp',
    checkHttpServer: 'controller/framework/checkHttpServer',
    doHttpRequest: 'controller/framework/doHttpRequest',
    doSocketRequest: 'controller/framework/doSocketRequest',
    ipcInvokeMsg: 'controller/framework/ipcInvokeMsg',
    ipcSendSyncMsg: 'controller/framework/ipcSendSyncMsg',
    ipcSendMsg: 'controller/framework/ipcSendMsg',
    someJob: 'controller/framework/someJob',
    createPool: 'controller/framework/createPool',
    someJobByPool: 'controller/framework/someJobByPool',
    hello: 'controller/framework/hello',
    openSoftware: 'controller/framework/openSoftware',
  },

  // os
  os: {
    messageShow: 'controller/os/messageShow',
    messageShowConfirm: 'controller/os/messageShowConfirm',
    selectFolder: 'controller/os/selectFolder',
    openDirectory: 'controller/os/openDirectory',
    createWindow: 'controller/os/createWindow',
    getWCid: 'controller/os/getWCid',
    sendNotification: 'controller/os/sendNotification',
  },

  // effect
  effect: {
    selectFile: 'controller/effect/selectFile',
    loginWindow: 'controller/effect/loginWindow',
    restoreWindow: 'controller/effect/restoreWindow',
  },

  // cross
  cross: {
    info: 'controller/cross/info',
    requestApi: 'controller/cross/requestApi',
  },
}

/**
 * Customize Channel
 * Format: Custom (recommended to add a prefix)
 */
const specialIpcRoute = {
  appUpdater: 'custom/app/updater', // updater channel
}

export { ipcApiRoute, specialIpcRoute }
