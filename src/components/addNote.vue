<template>
  <div class="addnote-wrapper">
    <div class="title">Заголовок</div>
    <input type="text" class="input-title" v-model="title" />
    <div class="descr">Описание</div>
    <textarea
      v-model="descr"
      lang="ru"
      name=""
      id=""
      cols="30"
      rows="10"
      class="input-descr"
    ></textarea>
    <div class="btn" @click="addNote" :dasabled="dasabled">Добавить</div>
    <div v-if="message !== ''" class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      descr: "",
      dasabled: false,
      message: "",
    };
  },
  methods: {
    addNote() {
     let maxId = 0;
  for (const obj of this.$store.getters.NOTES) {
    if (obj.id > maxId) {
      maxId = obj.id;
    }
  }
  const newId = maxId + 1;

      if (this.title == "" || this.descr == "") {
        return (
          this.disabled == true,
          (this.message = "Все поля обязательны для заполнения")
        );
      } else if (this.title !== "" || this.descr !== "") {
        this.message = "";
      }
      let info = {
        title: this.title,
        descr: this.descr.replace(/\n/g, '<br/>'),
        id: newId,
      };

      this.$store.dispatch("addToNote", info);
      return (this.title = ""), (this.descr = "");
    },
  },
};
</script>

<style>
</style>