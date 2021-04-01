<template>
  <v-toolbar
    color="red"
    dark
  >
    <v-toolbar-title class = "titre">
    {{titre}}
    </v-toolbar-title>

    <v-divider
      class="mx-4"
      vertical
    ></v-divider>

  </v-toolbar>
</template>

<script>
  export default {
    props: {
      'titre' :String,
    },
    data: () => ({
      show: false,
    }),
  }
</script>