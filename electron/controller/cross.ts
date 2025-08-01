import { crossService } from '../service/cross'

/**
 * Cross
 * @class
 */
class CrossController {
  /**
   * View process service information
   */
  info() {
    crossService.info()
    return 'hello electron-egg'
  }

  /**
   * Access the api for the cross service
   */
  async requestApi(args: { name: string; urlPath: string; params: any }): Promise<any> {
    const { name, urlPath, params } = args
    const data = await crossService.requestApi(name, urlPath, params)
    return data
  }
}
CrossController.toString = () => '[class CrossController]'

export default CrossController
