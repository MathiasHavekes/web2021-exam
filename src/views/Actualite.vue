<template>
  <div>
    <div>
      <Newscarousel />
    </div>
    <div>
      <NewsCard class="NewsCard" 
        titre="Titre 1"
        auteur="Auteur 1" 
        contenu="Contenu 1"/>
      <NewsCard class="NewsCard"
        titre="Titre 2"
        auteur="Auteur 2" 
        contenu="Contenu 2"/>
      <NewsCard class="NewsCard"
        titre="Titre 3"
        auteur="Auteur 3" 
        contenu="Contenu 3"/>
      <NewsCard class="NewsCard"
        titre="Titre 4"
        auteur="Auteur 4" 
        contenu="Contenu 4"/> 
      <NewsCard class="NewsCard"
        titre="Titre 5"
        auteur="Auteur 5" 
        contenu="Contenu 5"/>
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
  }
}
</script>

<style>
.NewsCard {
  margin: 20px;
}
</style>
