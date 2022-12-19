<template>
  <div id="list-complete-demo">
    <transition-group name="list-complete" tag="p" class="note-wrapper">
      <div
        class="note list-complete-item"
        v-for="(note, index) in notes"
        :key="note.id"
      >
        <div class="note-content">
          <div class="note-title">
            {{ note.title }}
          </div>
          <div class="note-descr" v-html="note.descr">
            
          </div>
          <div class="btn-wrapper">
            <router-link :to="'/open/' + note.id"
              ><div class="open-btn">Открыть</div></router-link
            >
            <div class="delele-btn" @click="deleteNote(index)">Удалить</div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    notes() {
      return this.$store.getters.NOTES;
    },
  },
  methods: {
    deleteNote(index) {
      this.$store.dispatch("delNote", index);
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.list-complete-item {
  transition: all 0.5s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>