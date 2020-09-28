/**
 * @description 更新广告信息
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = undefined;

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(backEndUrl + '/ad/update', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || undefined;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
