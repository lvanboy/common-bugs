<template>
  <div id="app">
    <p>vue父子生命周期导致的异步数据渲染问题</p>
    <Child :data="data" />
  </div>
</template>
<script >
import Child from "./child.vue";
export default {
  components: {
    Child
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    getData() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          let data = { res: [{ a: 1 }, { b: 1 }] };
          resolve(data);
        }, 3000);
      });
    }
    // async loadData() {
    //   this.data = await this.getData();
    // }
  },
  computed: {
    desc: function() {
      return `${this.title}-${this.vue}`;
    }
  },
  my() {
    console.log("my");
  },
  beforeCreate() {
    console.log(`beforeCreate->data:${JSON.stringify(this.data)}`);
  },
  created() {
    // this.loadData();
    console.log(`created->data:${JSON.stringify(this.data)}`);
  },
  beforeMount() {
    console.log(`beforeMount->data:${JSON.stringify(this.data)}`);
  },
  async mounted() {
    let data = await this.getData();
    this.data = data.res;
    console.log(`mounted->data:${JSON.stringify(this.data)}`);
  },
  beforeUpdate() {
    console.log(`beforeUpdate->data:${JSON.stringify(this.data)}`);
  },
  updated() {
    console.log(`updated->data:${JSON.stringify(this.data)}`);
  },
  beforeDestroy() {
    console.log(`beforeDestroy->data:${JSON.stringify(this.data)}`);
  },
  destroyed() {
    console.log(`destroyed->data:${JSON.stringify(this.data)}`);
  }
};
</script>
<style scoped>
</style>
