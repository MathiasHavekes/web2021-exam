<template>
  <v-card>
    <v-app-bar
      dark
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
    >
        <v-tabs align-with-title>
          <v-tab router-link to="/" class="Menu"> Actualité</v-tab>
          <v-tab router-link to="/Sport" class="Menu"> Sports</v-tab>
          <v-tab router-link to="/COVID-19" class="Menu"> COVID-19</v-tab>
        </v-tabs>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data () {
  },
};
</script>
<style scoped>
.Menu{
  font-size: 20px;
}
</style>