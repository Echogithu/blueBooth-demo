import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    exercise_msg: {}, //作业本的信息（date,subject,index）
    childrenList: [], // 绑定孩子列表
    childInfo: {}, // 当前孩子信息
    childFans: [], // 某个孩子被哪些用户关注
    childrenId: null, // 当前孩子id
    showPopUp: false, // 是否弹出上拉框
    updataError: {}, //更新错题本详情的状态时，保存数据更新错题列表数据
    addError: false,
    deleteErrorId: null // 删除题目的信息
  },
  getters: {
    getChildInfo: (state) => {
      let len = state.childrenList.length;
      for (let i = 0; i < len; i++) {
        if (state.childrenList[i].id == state.childrenId) {
          state.childInfo = state.childrenList[i];
        }
      }
    }
  },
  mutations: {
    getExercise_msg(state, provider) {
      state.exercise_msg = provider;
    },
    getUpdataErrorData(state, provider) {
      state.updataError = provider;
    },
    getAllChildrenData(state, provider) {
      state.childrenList = provider;
    },
    getChildFansData(state, provider) {
      state.childFans = provider;
    },
    setAddErrorData(state, provider) {
      state.addError = provider
    },
    setDeleteErrorId(state, provider) {
      state.deleteErrorId = provider
    },
    setChildrenId(state, provider) {
      state.childrenId = provider;
    },
    setShowPopUp(state, provider) {
      state.showPopUp = provider;
    },
    updataChildInfo(state, provider) {
      state.childInfo = { ...provider };
    }
  },
  actions: {
    async getChildrenList({ commit, rootState }) {
      let res = await getAllChildren();
      if (res.code == 0) {
        let data = res.data.map((item) => {
          let res = {
            id: item.id,
            parent_id: item.parent_id,
            photo: item.photo,
            name: item.name,
            sex: item.sex,
            grade: item.grade,
            type: item.type,
            lamp: item.lamp //台灯
          };
          return res;
        });
        if (data.length) {
          commit("getAllChildrenData", data);
          if (rootState.childrenId == null) {
            commit("setChildrenId", data[0].id); // 如果childrenId为null或undefined,取childrenList[0].id
          } else {
            commit("setChildrenId", rootState.childrenId);
          }
        } else {
          commit("getAllChildrenData", data);
          commit("setChildrenId", null);
        }
        return true;
      }
    },

    async getChildFansList({ commit }) {
      let res = await getChildFans();
      if (res.code == 0) {
        let data = res.data.map((item) => {
          let res = {
            id: item.id,
            lamp: item.lamp,
            openid: item.openid,
            nickName: item.nickName,
            avatarUrl: item.avatarUrl,
            gender: item.gender,
            city: item.city,
            province: item.province,
            type: item.type
          };
          return res;
        });
        commit("getChildFansData", data);
        return true;
      } else {
        // 孩子不存在情况
        return false;
      }
    }
  }
});
export default store;
