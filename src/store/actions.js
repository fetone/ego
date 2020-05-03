import {
  SET_TOKEN
} from './mutations-type'

export default {
  setToken ({ commit }, flag) {
    commit(SET_TOKEN, flag)
  }
}
