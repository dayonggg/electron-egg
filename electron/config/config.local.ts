import { type AppConfig } from 'ee-core/config'

const config: () => AppConfig = () => {
  return {
    openDevTools: {
      mode: 'right',
    },
    jobs: {
      messageLog: false,
    },
  }
}

export default config
