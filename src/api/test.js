import { get, post } from '@/utils/request';

export const getInfo = (params) => get('app/user/userinfo.do', params);
export const getList = (data) => post('app/list/accoutList.do', data);
