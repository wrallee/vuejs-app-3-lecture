import {
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "../api/index.js";

export default {
    // api단에서 이미 try-catch 처리 됨
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data)
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
}