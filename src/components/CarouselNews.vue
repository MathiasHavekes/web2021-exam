<template>
    <v-carousel
      :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
  
    <v-list color="#00000040">
        <v-list-item>
        <v-list-item-content  two-line>
          <v-list-item-title class='black--text'> {{item.titre}} </v-list-item-title>
          <v-list-item-subtitle class='black--text'>{{item.contenu}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-switch
            v-model="cycle"
            label="Cycler"
            inset="true"
            dark
          ></v-switch>
        </v-list-item-action>

      </v-list-item>
    </v-list>
      </v-carousel-item>
  </v-carousel>

</template>
<script>
  export default {
    data () {
      return {
        cycle: false,
        items: [
            {
                src: require('../assets/images/cité.jpeg'),
                titre: 'Titre',
                contenu: 'Contenu 1'
            },
            {
                src: require('../assets/images/cité.jpeg'),
                titre: 'Titre',
                contenu: 'Contenu 2'
            },
            {
                src: require('../assets/images/cité.jpeg'),
                titre: 'Titre',
                contenu: 'Contenu 3'
            },
            {
                src: require('../assets/images/cité.jpeg'),
                titre: 'Titre',
                contenu: 'Contenu 4'
            },
        ],
      }
    },
  }
</script>