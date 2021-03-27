<template>
  <div>
    <div>
      <Newscarousel v-bind:items="items"/>
    </div>
    <div>
      <NewsCard class="NewsCard" 
        titre="Titre 1"
        auteur="Auteur 1" 
        contenu="Contenu 1"
        src="../assets/images/L'actualité.jpg"/>
      <NewsCard class="NewsCard"
        titre="Titre 2"
        auteur="Auteur 2" 
        contenu="Contenu 2"
        src="../assets/images/L'actualité.jpg"/>
      <NewsCard class="NewsCard"
        titre="Titre 3"
        auteur="Auteur 3" 
        contenu="Contenu 3"
        src="../assets/images/L'actualité.jpg"/>
      <NewsCard class="NewsCard"
        titre="Titre 4"
        auteur="Auteur 4" 
        contenu="Contenu 4"
        src="../assets/images/L'actualité.jpg"/> 
      <NewsCard class="NewsCard"
        titre="Titre 5"
        auteur="Auteur 5" 
        contenu="Contenu 5"
        src="../assets/images/L'actualité.jpg"/>
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard'
import Newscarousel from '../components/CarouselNews'
export default {
  name: '',
  components: {   
    Newscarousel,
    NewsCard,
  },
  data () {
    return {
      items: [            
       {src: require('../assets/images/ImagesCarousel/cité.jpeg'), titre: 'Titre 1', contenu: 'Contenu 1'},
       {src: require('../assets/images/ImagesCarousel/cité.jpeg'), titre: 'Titre 2', contenu: 'Contenu 2'},
       {src: require('../assets/images/ImagesCarousel/cité.jpeg'), titre: 'Titre 3', contenu: 'Contenu 3'},
       {src: require('../assets/images/ImagesCarousel/cité.jpeg'), titre: 'Titre 4', contenu: 'Contenu 4'},
      ]
    } 
  },
}
</script>

<style>
.NewsCard {
  margin: 20px;
}
</style>
