/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer, IpcRenderer  } from 'electron'
import { SessionPreloadProps } from './types'


declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
      session: SessionPreloadProps;
    }
  }
}



// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once('loaded', () => {
  global.ipcRenderer = ipcRenderer
})