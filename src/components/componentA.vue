<template>
  <div>
    组件A
    <p>{{$store.state.username}}</p>
		<p>{{$store.getters.reverseName}}</p>
    <button @click="handleClick">点点我</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
    };
  },
  methods: {
    handleClick() {
      this.$store.commit('changeName','hello world');
    },
  },
};
</script>
