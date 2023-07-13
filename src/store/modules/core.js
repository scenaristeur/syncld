//import * as api from "@/api/syncld";

const state = () => ({
  toaster : {}
  // current: null,
  // user: null,
  // history: [],
});

const mutations = {
  // setCurrent(state, c) {
  //   console.log(c);
  //   state.current = c;
  //   this.commit("core/pushToHistory", c);
  // },
  setToast(state, t) {
    console.log(t);
    state.toaster = t;
  },
  // pushToHistory(state, n) {
  //   let h = state.history;
  //   console.log("avant", h);
  //   let history = state.history.filter((todo) => todo['@id'] != n['@id']);
  //   console.log("après", history);
  //   history.unshift({ '@id': n['@id'], 've:name': n['ve:name'], 've:group': n['ve:group'] });
  //   state.history = history;
  //   console.log(history);
  // },
  // updateNode(n){
  //   console.log("todo find node byId and update",n)
  // }
};

const actions = {
//   create(/*{ commit, state },*/ item) {
//     api.create(item);
//   },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
