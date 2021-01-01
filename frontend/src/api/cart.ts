import http from './index';

const PREFIX = '/cart';

export const getCart = () => http.get(PREFIX);

export const createCart = (params: Record<string, any>) => http.post(PREFIX, params);

export const editCart = (params: Record<string, any>) => http.put(PREFIX, params);

export const deleteCart = (params: Record<string, any>) => http.delete(PREFIX, { params });
