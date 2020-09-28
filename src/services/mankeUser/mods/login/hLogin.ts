/**
 * @description h5页面用户名密码登录
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.LoginAccessToken();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/hLogin', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeUser.LoginAccessToken();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
