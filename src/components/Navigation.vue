<template lang="pug">
	nav#nav.nav
		router-link.nav__link(to='/') Home
		router-link.nav__link(to='/favourite') Favourite Images
</template>

<script>
	export default {
		name: 'Navigation'
	}
</script>