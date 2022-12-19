<template>
  <div class="container">
    <div class="header">Заметки</div>
    <div class="main-wrapper">
      <addnote></addnote>
      <notes></notes>
    </div>
  </div>
</template>

<script>
import addnote from "../components/addNote.vue";
import notes from "../components/notes.vue";

export default {
  components: {
    addnote,
    notes,
  },
};
</script>

<style>
</style>