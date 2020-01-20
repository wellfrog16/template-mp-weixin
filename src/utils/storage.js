
import moment from 'moment';
import utils from './index';

// 带有效期的Storage

/**
 * 异步删除指定的Storge
 *
 * @param {string} key
 */
function remove(key) {
    return new Promise((resove, reject) => {
        uni.removeStorage({
            key,
            success: (res) => {
                resove('success');
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
}

/**
 * 同步删除指定的storage
 *
 */
function removeSync(key) {
    uni.removeStorageSync(key);
}


/**
 * 格式化存储值，{ val: '', tpye: '', createAt: '' }
 *
 * @param {string} key
 * @param {string} val
 * @param {{date | number(秒)}} [{ expires }={}]
 */
function storageEncode(key, value, { expires } = {}) {
    const type = utils.xtypeof(expires);
    const createAt = moment().format('YYYY-MM-DD HH:mm:ss');
    const val = value;
    const item = { val, type, createAt };
    const handle = {
        date() { item.expires = moment(expires).format('YYYY-MM-DD HH:mm:ss'); },
        number() { item.expires = expires; },
    };
    handle[type] && handle[type]();
    return item;
}

/**
 * 异步设置Storge
 *
 * @param {string} key
 * @param {string} val
 * @param {{date | number(秒)}} [{ expires }={}]
 */
function set(key, value, { expires } = {}) {
    const data = storageEncode(key, value, { expires });

    return new Promise((resove, reject) => {
        uni.setStorage({
            key,
            data,
            success: (res) => {
                resove('success');
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
}

/**
 * 同步设置Storge
 *
 * @param {string} key
 * @param {string} val
 * @param {{date | number(秒)}} [{ expires }={}]
 */
function setSync(key, value, { expires } = {}) {
    const data = storageEncode(key, value, { expires });
    uni.setStorageSync(key, data);
}

/**
 * 解析storage的数据
 *
 * @param {string} key key
 * @param {storage} item 待解析的storage
 * @returns
 */
function storageDecode(key, item) {
    let result = '';
    if (!item) { return ''; }

    const handle = {
        date() {
            if (new Date() > new Date(item.expires)) {
                remove(key);
            } else {
                result = item.val;
            }
        },
        number() {
            const ss = (moment().valueOf() - moment(item.createAt).valueOf()) / 1000;
            if (ss > +item.expires) {
                remove(key);
            } else {
                result = item.val;
            }
        },
        undefined() {
            result = item.val;
        },
    };

    handle[item.type] && handle[item.type]();
    return result;
}

/**
 * 获取Storge
 *
 * @param {string} key
 * @returns
 */
function get(key) {
    return new Promise((resove, reject) => {
        uni.getStorage({
            key,
            success: (res) => {
                if (!res) { resove(''); }

                const result = storageDecode(key, res.data);
                resove(result);
            },
            fail: (err) => {
                reject(err);
            },
        });
    });
}

/**
 * 获取Storge
 *
 * @param {string} key
 * @returns
 */
function getSync(key) {
    const data = uni.getStorageSync(key);
    return storageDecode(key, data);
}

export default {
    get,
    getSync,
    set,
    setSync,
    remove,
    removeSync,
};
