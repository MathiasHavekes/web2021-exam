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

      <v-card-text class="white--text pt-0">
        <br>  Ce site est concu avec l'intention de proposer un service de location de voitures électriques. Dans nos différents centres, vous trouverez un lot de voitures flambant neuves et disponibles que vous pourrez louer avec des tarifs raisonnables. Avec un total de quatres centres couvrant chacun une région différente, vous pourrez explorer le Quebec comme il vous plaira. Au plaisir de vous servir !
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