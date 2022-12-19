<template>
  <div class="open-wraper">
    <div class="open-header">
      <router-link :to="'/'">Главная</router-link> <span>/ </span>
      <span>{{ note.title }}</span>
    </div>

    <div class="open-note">
      <div class="open-title">
        {{ note.title }}
      </div>
      <div class="open-descr" v-html="note.descr">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.note = this.$store.getters.GET_NOTES(id);
  },
};
</script>

<style scoped>
a {
  color: blue;
  text-decoration: underline;
}
</style>