import instance from '@/common/fly';

const fly = instance();

const list = (params) => fly.get('https://jsonplaceholder.typicode.com/todos/1', params);

export default {
    list,
};
