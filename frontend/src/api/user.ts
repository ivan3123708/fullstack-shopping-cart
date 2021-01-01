import http from './index';

const PREFIX = '/user';

export const getUser = () => http.get(PREFIX);

export const editUser = (data: Record<string, any>) => http.put(PREFIX, data);
