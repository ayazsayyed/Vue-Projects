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
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create New Board</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-alternative"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    >
                  </div>
                </div>
                <div class="col-md-12">
                  <textarea
                    class="form-control form-control-alternative"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write a large text here ..."
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from "./utils/bus";
export default {
  name: "Modal",
  components: {
    Bus
  },
  data: function() {
    return {
      title: "Modal"
    };
  },
  methods: {
    showNewBoardPopup() {
      $("#genericPopup").modal("show");
    }
  },
  mounted() {
    Bus.$on("new-board", this.showNewBoardPopup);
  }
};
</script>

<style>
</style>
