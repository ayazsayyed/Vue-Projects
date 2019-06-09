import Vue from "vue"
export default {
    // Set Initial Data
    SET_INITIAL_DATA(state, payload) {
        state.boards = payload
    },
    SAVE_TASKBOARD(state, payload){
        console.log('state', state)
        console.log('payload', payload);
        state.boards.push(payload)
    }
}