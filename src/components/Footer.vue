<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center"
    >      
        <v-card-text>
            <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            :href="icon.ref"
            icon
            >
            <v-icon size="24px">
                {{ icon.icone }}
            </v-icon>
            </v-btn>
        </v-card-text>

      <v-card-text class="white--text pt-0" >
        Un petit site non interactif concu comme un site d'actualité. Ce prototype se compose de trois pages, chacune proposant des nouveautés d'un sujet spécifique. On ne met pas à jour spécialement les informations vu qu'on fait pas usage de la base de données. <br> Nos icones font référence aux résaux sociaux de 'L'actulité'.
      </v-card-text>
      
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Site d'actualité</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({  
        icons: [
        {icone: 'mdi-facebook', ref:'https://www.facebook.com/lactualite'},
        {icone: 'mdi-twitter', ref:'https://twitter.com/lactualite?lang=en'},
        {icone:'mdi-instagram', ref:'https://www.instagram.com/lactualite_qc/?hl=en'},
      ],   
    }),
  }
</script>