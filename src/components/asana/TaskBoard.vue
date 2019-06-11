<template>
  <div class="row row-eq-height">
    <div
      class="col-xs-12 col-sm-6 col-md-3 d-flex pb-3"
      v-for="taskBoard in taskBoards"
      v-bind:key="taskBoard.id"
    >
      <div class="boards-wrapper w-100">
        <div class="board card shadow shadow-lg--hover">
          <div class="card-header">
            <div class="card-name">
              <h4>
                <input class="transparent-input form-control" type="text" :value="taskBoard.name">
              </h4>
            </div>
            <div class="card-desc">
              <p>
                <input
                  class="transparent-input form-control small"
                  type="text"
                  :value="taskBoard.description"
                >
              </p>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-cta">
              <!-- <button class="btn btn-sm btn-primary" type="button">View</button> -->
              <router-link
                class="btn btn-sm btn-primary"
                :to="{ name: 'task-board', params: { id: '132165468' } }"
              >View</router-link>
              <button class="btn btn-sm btn-danger" type="button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./store/index";
export default {
  name: "TaskBoard",
  components: {},
  data: function() {
    return {
      title: "Project - Management",
      taskBoards: ""
    };
  },
  methods: {},
  mounted() {
    //   store.SET_INITIAL_DATA();
  },
  created() {
    store
      .dispatch("fetchData")
      .then(something => {
        this.taskBoards = store.state.boards;
      })
      .catch(error => {
        // you got an error!
      });
  }
};
</script>

<style scoped>
.transparent-input {
  width: 100%;
  border: 1px solid transparent;
  background: transparent;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: #32325d;
  font-size: 1.75rem;
}
.small.transparent-input {
  font-size: 1rem;
}
.transparent-input:hover,
.transparent-input:focus {
  border: 1px solid rgba(202, 202, 202, 1);
}
</style>
