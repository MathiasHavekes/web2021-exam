<template>
  <v-card
    class="mx-auto"
    max-width="800px"
  >
    <v-img
      src="../assets/images/L'actualité.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{titre}}
    </v-card-title>

    <v-card-subtitle>
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

        <v-card-text>
          {{contenu}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props: [
      'titre',
      'auteur',
      'contenu',
      'src'
      ],
    data: () => ({
      show: false,
    }),
  }
</script>