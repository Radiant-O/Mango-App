import { Commit, createStore } from "vuex";


export default createStore({
    
    state: {
        authenticated: false
    },
    mutations: {
        SET_AUTH(state, auth) {
            state.authenticated = auth;
        }
    },
    actions: {
        setAuth({commit}, auth) {
            commit('SET_AUTH', auth);
        }
    },
    modules: {}
})

// export default createStore({
//     state: {
//         authenticated: false
//     },
//     mutations: {
//         SET_AUTH: (state: { authenticated: boolean }, auth: boolean) => state.authenticated = auth
//     },
//     actions: {
//         setAuth: ({commit}: { commit: Commit }, auth: boolean) => commit('SET_AUTH', auth)
//     },
//     modules: {}
// })


// state: {
//     authenticated: false;
// }
// mutations: {
//     SET_AUTH: (function (state, auth) { return state.authenticated = auth; });
// }
// actions: {
//     setAuth: (function (_a, auth) {
//         var commit = _a.commit;
//         return commit('SET_AUTH', auth);
//     });
// }
// modules: { }


// export default createStore({
//     state: {
//       authenticated: false
//     },
//     mutations: {
//       SET_AUTH: (state, auth) => (state.authenticated = auth)
//     },
//     actions: {
//       setAuth: ({ commit }, auth) => commit("SET_AUTH", auth)
//     },
//     modules: {}
//   })


