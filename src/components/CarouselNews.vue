<template>
    <v-carousel
      :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="slide-x-transition"
      transition="slide-x-transition">
  
      <v-list color="#00000080" class="Hover">
          <v-list-item>
          <v-list-item-content two-line>
            <v-list-item-title class='Titre'> {{item.titre}} </v-list-item-title>
            <v-list-item-subtitle class='Contenu' >{{item.contenu}}</v-list-item-subtitle>
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
    props: ['items'],
    data () {
      return {
        cycle: false,
      }
    },
  }
</script>

<style scoped>
.Titre {
  font-size: 25px;
  color: white;
}
.Contenu{
  font-size: 20px;
  color: white;
}
.Hover{
  margin-top: 355px;
}
</style>