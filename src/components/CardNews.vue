<template>
  <v-card
    class="mx-auto"
    max-width="800px"
  >
    <v-img
      height="400px"
      :src="require(`@/assets/images/ImagesNews/${pic_name}`)"
    ></v-img>

    <v-card-title class="Titre">
      {{titre}}
    </v-card-title>

    <v-card-subtitle class="DatePub">
      {{auteur}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="Contenu">
          {{contenu}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props: {
      'titre' :String,
      'auteur':String,
      'contenu':String,
      'pic_name':String
    },
    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>
.Titre{
  font-size: 24px;
}
.DatePub{
  font-size : 18px;
}
.Contenu{
  font-size: 18px;
}
</style>