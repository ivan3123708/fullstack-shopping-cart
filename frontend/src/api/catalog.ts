import http from './index';

const PREFIX = '/catalog';

export const getCatalog = () => http.get(PREFIX);
