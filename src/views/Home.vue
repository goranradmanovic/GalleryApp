<template lang="pug">
	.main__section--content
		h1.main__section--content--title Images List
		.main__section--content--masonry
			router-link.main__section--content--link(v-for='(item, index) in imagesList' :key='index' :to='{path: "/image/" + index}')
				img.main__section--content--link--img(:src='"https://portal-tb.lynxx.co/api-test/image/" + item.id' :alt='item.name' loading='lazy')
				span {{ item.name }}
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'Home',

		data() {
			return {
				imagesList: []
			}
		},

		methods: {
			...mapGetters([
				'allImagesList'
			]),

			setImagesList() {
				this.imagesList = this.allImagesList();
			}
		},

		mounted() {
			this.setImagesList();
		}
	}
</script>
