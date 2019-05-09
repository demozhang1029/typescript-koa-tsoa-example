import { resolve } from "path";
import Http from 'http';
import Querystring from 'querystring';

export const Service = {
    search: async(kw: string = '') => {
        return new Promise((resolve, reject) => {
            Http.request({
                hostname: 'm.maoyan.com',
                path: '/ajax/search?' + Querystring.stringify({
                    kw,
                    cityId: 10
                })
            }, res => {
                res.setEncoding('utf8');
                let data: Array<any> = [];
                res.on('data', (chunk) => {
                    data.push(chunk);
                }).on('end', () => {
                    resolve(data.join(''));
                })
            }).end();
        });
    }
};