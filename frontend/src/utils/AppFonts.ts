import FontFaceObserver from 'fontfaceobserver'

export class AppFonts {
  private static instance: AppFonts

  private fonts = [
    {
      name: '思源黑体-M',
      font: 'SourceHanSansCN-Medium',
    },
    {
      name: '思源黑体-B',
      font: 'SourceHanSansCN-Bold',
    },
    {
      name: '思源黑体-H',
      font: 'SourceHanSansCN-Heavy',
    },
    {
      name: '阿里巴巴普惠体-B',
      font: 'Alibaba_PuHuiTi_Regular_85_Bold',
    },
    {
      name: '阿里巴巴普惠体-H',
      font: 'Alibaba_PuHuiTi_Regular_105_Heavy',
    },
    {
      name: 'consolas',
      font: 'consolas',
    },
  ]

  constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new AppFonts()
    }
    return this.instance
  }

  public async initialize() {
    const funs = this.fonts.map(font => {
      return new FontFaceObserver(font.font)
        .load()
        .then(() => {
          console.log(`%cfont load ${font.name} success.`, 'color: green;')
        })
        .catch(() => {
          console.error(`font load ${font.name} failed.`)
        })
    })
    Promise.all(funs)
  }

  public getArtFont() {
    return this.fonts.filter(font => font.name !== 'consolas')
  }
}
