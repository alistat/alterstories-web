import Vuex from 'vuex';
import StoriesStore from '../components/stories/StoryStore';
import UserStore from '../components/users/UserStore';
import BootstrapStore from '../components/bootstrap/BootstrapStore';
import environment from '../config/environment';

export function requestConfigExtractor({rootState}) {
  if (rootState.users.token) {
    return {
      headers: {
        'Authorization': 'Bearer ' + rootState.users.token
      }
    }
  } else {
    return {};
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageHead: 'alterstories',
      environment,
    },
    mutations: {
      setPageHead(state, head) {
        state.pageHead = head;
      }
    },
    modules: {
      stories: StoriesStore,
      users: UserStore,
      bootstrap: BootstrapStore
    }
  })
};

export default createStore
