import http from './index';

const PREFIX = '/order';

export const createOrder = (params: Record<string, any>) => http.post(PREFIX, params);
