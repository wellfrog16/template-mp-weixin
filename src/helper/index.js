import { STORAGE_SITE, USER_INFO } from '@/helper/constant';
import config from '@/config';

/**
 * 存放header等信息
 *
 * @returns json
 */
function site() {
    return new Promise(async (resolve, reject) => {
        let userInfo = {};

        const a = await uni.getStorage({key: USER_INFO});
        console.log(a);
        // uni.getStorage({
        //     key: USER_INFO,
        //     success: (res) => {
        //         userInfo = { ...res.data };
        //         console.log(res);
        //     },
        //     fail: (err) => {
        //         console.log(err);
        //     }
        // });
    })
    // const mySite = {};
    // return {
    //     // 属性等
    //     ...mySite,
    //     headers: {
    //         Authorization: mySite.accessToken,
    //     },

    //     // 方法
    //     destroy() {
    //         storage.remove(STORAGE_SITE);
    //     },
    // };
}

export default {
    site,
    config,
};