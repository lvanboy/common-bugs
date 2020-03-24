<template>
  <div id="app">
    <p>vue父子生命周期导致的异步数据渲染问题</p>
  </div>
</template>
<script >
export default {
  data() {
    return {
      title: "lifecycle",
      vue: "i am vue"
    };
  },
  methods: {
    reverse() {
      this.title
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    desc: function() {
      return `${this.title}-${this.vue}`;
    }
  },
  beforeCreate() {
    console.log(`beforeCreate->data:${this.title}`);
    console.log(`beforeCreate->methods:${this.reverse()}`);
    console.log(`beforeCreate->computed:${this.desc}`);
  },
  created() {
    console.log(`created->data:${this.title}`);
    console.log(`created->methods:${this.reverse()}`);
    console.log(`created->computed:${this.desc}`);
  },
  beforeMount() {
    console.log(`beforeMount->data:${this.title}`);
    console.log(`beforeMount->methods:${this.reverse()}`);
    console.log(`beforeMount->computed:${this.desc}`);
  },
  mounted() {
    console.log(`mounted->data:${this.title}`);
    console.log(`mounted->methods:${this.reverse()}`);
    console.log(`mounted->computed:${this.desc}`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate->data:${this.title}`);
    console.log(`beforeUpdate->methods:${this.reverse()}`);
    console.log(`beforeUpdate->computed:${this.desc}`);
  },
  updated() {
    console.log(`updated->data:${this.title}`);
    console.log(`updated->methods:${this.reverse()}`);
    console.log(`updated->computed:${this.desc}`);
  },
  beforeDestroy() {
    console.log(`beforeDestroy->data:${this.title}`);
    console.log(`beforeDestroy->methods:${this.reverse()}`);
    console.log(`beforeDestroy->computed:${this.desc}`);
  },
  destroyed() {
    console.log(`destroyed->data:${this.title}`);
    console.log(`destroyed->methods:${this.reverse()}`);
    console.log(`destroyed->computed:${this.desc}`);
  }
};
</script>
<style scoped>
</style>
