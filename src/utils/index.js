import _ from 'lodash';

function customizer(objValue, srcValue) {
    if (_.isPlainObject(srcValue)) {
        return _.mergeWith(objValue, srcValue, customizer);
    }
    return srcValue;
}

// 深度合并，包含原型
function deepMerge(target, obj) {
    _.mergeWith(target, obj, customizer);
}

export default {
    deepMerge,
};