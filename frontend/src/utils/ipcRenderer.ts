import { IpcRenderer } from 'electron'

const Renderer = (window.require && window.require('electron')) || window.electron || {}

/**
 * ipc
 */
const ipc = (Renderer.ipcRenderer as IpcRenderer) || undefined

export { ipc }
