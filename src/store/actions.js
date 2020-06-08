import {
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "../api/index.js";

export default {
    async FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(error => console.log(error));
    },
}