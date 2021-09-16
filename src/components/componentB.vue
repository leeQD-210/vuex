<template>
	<div>
		组件B
		<p>{{$store.state.username}}</p>
    <button @click="handleClick">点点我</button>
	</div>
</template>
<script>
export default {
	methods: {
		handleClick(){
			this.$store.dispatch('getName','hello vue')
		}
	},
}
</script>