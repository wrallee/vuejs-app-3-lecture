import {
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from "../api/index.js";

export default {
    // #2
    async FETCH_LIST({ commit }, pageName) {
        // #3
        return fetchList(pageName)
            .then(({ data }) => {
                // #4
                commit('SET_LIST', data)
            })
            .catch(error => console.log(error));
    },
    async FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then(({ data }) => commit('SET_USER', data))
            .catch(error => console.log(error));
    },
    async FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => commit('SET_ITEM', data))
            .catch(error => console.log(error));
    },
}