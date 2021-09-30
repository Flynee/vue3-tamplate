import request from '@/utils/request';

export function testGet(params) {
    return request({
        method: 'get',
        url: '/test/get',
        params,
    });
}

export function testPost(data) {
    return request({
        method: 'post',
        url: '/test/post',
        data,
    });
}
