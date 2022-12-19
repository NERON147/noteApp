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
      const range = 10000;
      const count = 1;

      let m = {};
      let a = [];
      for (let i = 0; i < count; ++i) {
        let r = Math.floor(Math.random() * (range - i));
        a.push((r in m ? m[r] : r) + 1);
        let l = range - i - 1;
        m[r] = l in m ? m[l] : l;
      }
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
        id: a.join(),
      };

      this.$store.dispatch("addToNote", info);
      return (this.title = ""), (this.descr = "");
    },
  },
};
</script>

<style>
</style>