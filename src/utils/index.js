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

function xtypeof(val) {
    let type = '';
    _.isNumber(val) && (type = 'number');
    _.isDate(val) && (type = 'date');
    _.isUndefined(val) && (type = 'undefined');
    return type;
}

export default {
    deepMerge,
    xtypeof,
};