<template>
  <div class="row">
    <div class="col-md-3" v-for="taskBoard in taskBoards" v-bind:key="taskBoard.id">
      <div class="boards-wrapper">
        <div class="board card shadow shadow-lg--hover">
          <div class="card-header">
            <div class="card-name">
              <h4>{{taskBoard.name}}</h4>
            </div>
            <div class="card-desc">
              <p>{{taskBoard.description}}</p>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-cta">
              <button class="btn btn-sm btn-primary" type="button">View</button>
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
      taskBoards: [
        {
          id: 1,
          name: "Project Tracker",
          description: "This is a project tracker board"
        },
        {
          id: 2,
          name: "Bupa Project",
          description: "This is a project for Bupa"
        }
      ]
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
        console.log("something", something);
      })
      .catch(error => {
        // you got an error!
      });
  }
};
</script>

<style>
</style>
