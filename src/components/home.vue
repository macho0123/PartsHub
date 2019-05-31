<template>
	<div>
		<h1>Home</h1>
		{{msg}}
	</div>
</template>

<script>

export default {
	name: 'Home',
	data () {
		return {
			msg: 'Prices that will make you excited!'
		}
	}
}

</script>

<style scoped>
.div {
	background-color: red;
}
</style>