import Vue from "vue"
export default {
    // Set Initial Data
    SET_INITIAL_DATA(state, payload) {
        console.log('state', state)
        console.log('payload', payload)
        state.boards = payload
    }
}