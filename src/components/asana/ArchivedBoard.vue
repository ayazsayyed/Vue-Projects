<template>
  <div class="archive-wrapper">
    <button type="button" class="btn btn-warning" @click="toggleArchiveList">Archived Boards</button>
    <div class="archive-inner" v-show="isArchived">
      <div class="card shadow shadow-lg--hover">
        <div class="card-body">
          <ul>
            <li>
              <div class="d-flex justify-content-between align-items-center">
                <div class="board-details">
                  <h6 class="board-name">ABC BOARD</h6>
                  <p class="board-date">Date : 02/03/19</p>
                </div>
                <div class="actions">
                  <a href="#">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArchivedBoard",
  components: {},
  data: function() {
    return {
      title: "Archive - Board",
      isArchived: false
    };
  },
  methods: {
    toggleArchiveList() {
      this.isArchived = !this.isArchived;
    }
  },
  mounted() {},
  created() {}
};
</script>

<style scoped>
.archive-wrapper {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
.archive-inner {
  position: absolute;
  bottom: 50px;
  width: 300px;
  right: 0;
}
.card {
  background-color: #f6f9fc;
}
.card ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
.board-name {
  margin: 0;
}
.board-date {
  margin: 0;
  font-size: 12px;
}
</style>
