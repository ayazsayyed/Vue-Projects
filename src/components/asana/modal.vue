<template>
  <div class>
    <!-- Modal -->
    <div
      class="modal fade"
      id="genericPopup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <form  @submit.prevent="newTaskBoardForm">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create New Board</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="Board Name"
                      v-model.trim="newTaskBoard.name"
                    >
                  </div>
                </div>
                <div class="col-md-12">
                  <textarea
                    class="form-control form-control-alternative"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Board Description text here ..."
                    v-model.trim="newTaskBoard.description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-sm btn-default">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./utils/bus";
import store from "./store/index";
export default {
  name: "Modal",
  components: {
    Bus
  },
  data: function() {
    return {
      title: "Modal",
      newTaskBoard:{
        name:null,
        description:null,
        id:1234
      }
    };
  },
  methods: {
    showNewBoardPopup() {
      $("#genericPopup").modal("show");
    },
    newTaskBoardForm(e) {
      console.log(this.newTaskBoard);
      var payload = {
            id: this.newTaskBoard.id,
            name: this.newTaskBoard.name,
            description: this.newTaskBoard.description
          };
      store
      .dispatch("saveTaskBoard", payload)
      .then(something => {
        this.newTaskBoard.id = null
        this.newTaskBoard.name = null
        this.newTaskBoard.description = null
        $("#genericPopup").modal("hide");
        
      })
      .catch(error => {
        // you got an error!
      });
    }
  },
  mounted() {
    Bus.$on("new-board", this.showNewBoardPopup);
  }
};
</script>

<style>
</style>
