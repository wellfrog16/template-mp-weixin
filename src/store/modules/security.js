import { utils } from '@/utils/rivers';

const store = {
    namespaced: true,
    state: {
        name: 'dog',
    },
    mutations: {
        setState: (state, payload) => utils.deepMerge(state, payload),
    },
    actions: {
    }
};

export default store;
