<template>
  <div id="child">
    <p>子元素接受props:{{data[0]&&data[0].a}}</p>
  </div>
</template>
<script >
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data(){
      return {
          title:'child-data-info'
      }
  },
  beforeCreate() {
    console.log(`child-beforeCreate->data-title:${JSON.stringify(this.title)}`);
  },
  created() {
    console.log(`child-created->data:${JSON.stringify(this.data)}`);
  },
  beforeMount() {
    console.log(`child-beforeMount->data:${JSON.stringify(this.data)}`);
  },
  mounted() {
    console.log(`child-mounted->data:${JSON.stringify(this.data)}`);
  },
  beforeUpdate() {
    console.log(`child-beforeUpdate->data:${JSON.stringify(this.data)}`);
  },
  updated() {
    console.log(`child-updated->data:${JSON.stringify(this.data)}`);
  },
  beforeDestroy() {
    console.log(`child-beforeDestroy->data:${JSON.stringify(this.data)}`);
  },
  destroyed() {
    console.log(`child-destroyed->data:${JSON.stringify(this.data)}`);
  }
};
</script>
<style scoped>
</style>
