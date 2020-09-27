<template lang="pug">
	.main__section--content
		h1.main__section--content--title Favourite Images List
		.main__section--content--masonry.favourite
			router-link.main__section--content--link(v-for='(item, index) in favouriteImages' :key='index' :to='{path: "/image/" + index}')
				img.main__section--content--link--img(:src='"https://portal-tb.lynxx.co/api-test/image/" + item.id' :alt='item.name' loading='lazy')
				span {{ item.name }}
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'Favorite',

		data() {
			return {
				favouriteImages: []
			}
		},

		methods: {
			...mapGetters([
				'allImagesList'
			]),

			filterImagesList() {
				let allImage = this.allImagesList();

				this.favouriteImages = allImage.filter(this.isFavourite);
			},

			isFavourite(image) {
				return image.favourite;
			}
		},

		mounted() {
			this.filterImagesList();
		}
	}
</script>