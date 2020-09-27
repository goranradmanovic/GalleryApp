<template lang="pug">
	.main__section--content
		h1.main__section--content--title Image Name {{ imageName }}
		button.main__section--content--btn(@click='goBack') &lsaquo; Back

		.main__section--content--single
			img.main__section--content--single--img(:src='"https://portal-tb.lynxx.co/api-test/image/" + imageId' alt='Single image' loading='lazy')
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'SingleImage',
		data() {
			return {
				allImages: [],
				imageId: null,
				imageName: ''
			}
		},

		methods: {
			...mapGetters([
				'allImagesList'
			]),

			setAllImages() {
				this.allImages = this.allImagesList();
			},

			setImageId() {
				this.imageId = this.allImages[this.$route.params.id].id;
			},

			setImageName() {
				this.imageName = this.allImages[this.$route.params.id].name;
			},

			goBack() {
				this.$router.go(-1);
			}
		},

		mounted() {
			this.setAllImages();
			this.setImageId();
			this.setImageName();
		}
	}
</script>