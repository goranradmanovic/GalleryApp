<template lang="pug">
  #app
    header.header
      Navigation

    main.main
      section.main__section
        router-view

    footer.footer
      p.footer__info Designed &amp; Developed By &nbsp;
        a.footer__info--link(href='https://goranradmanovic.github.io/' target='_blank') Goran Radmanovic
</template>

<script>
  import Navigation from '@/components/Navigation.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    components: {
      Navigation
    },

    methods: {
      //API Calls
      ...mapActions([
        'getImagesList'
      ])
    },

    created() {
      this.getImagesList();
    }
  }

</script>
<style lang="sass">
  //This style tags are required here in order for sass compiler and live reload to work
</style>
