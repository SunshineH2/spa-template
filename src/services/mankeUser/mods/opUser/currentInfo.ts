/**
 * @description 获取当前系统管理员信息
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = new defs.mankeUser.OpUserDTO();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/opUser/currentInfo', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.mankeUser.OpUserDTO();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
