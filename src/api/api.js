/*
 * @Author: APeng 
 * @Date: 2019-01-17 21:11:45 
 * @Last Modified by: APeng
 * @Last Modified time: 2019-01-17 21:31:53
 */

import request from '../jslib/ap-axios'

export const test = data => {
    return request({
        url: ``,    //  这里放接口路径(去除基础路径)
        headers: {},    //  可有可无
        method: 'GET',
        data    // 这里是参数，可改 params
    })
}