<template>
  <div>
        <div v-for="(item,i) in itemsBox" 
          :key="i">
        <divider class = "divider"
            :titre="item.titre"/>
        <breadcrumbs class="breadcrumbs" 
        :text="item.text"/>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '../components/breadcrumbs'
import divider from '../components/Dividers'
export default {
  name: '',
  components: {   
    breadcrumbs,
    divider
  },
  data () {
    return {
      itemsBox : [
      {text:"Le premier ministre de l'Ontario Doug Ford tient un point de presse à 13 h 30 pour annoncer de nouvelles mesures de confinement qui touchent l'ensemble de la province.À quelques heures de l'annonce officielle, le premier ministre de l'Ontario Doug Ford a confirmé à demi-mot un confinement qu'il refuse d'appeler en ces termes, évoquant plutôt « une décision difficile, mais juste ». Son gouvernement doit annoncer jeudi, à 13 h 30, qu'il resserre substantiellement les restrictions dans tout l'Ontario. Les changements entreront en vigueur samedi. Selon des détails obtenus par Radio-Canada, le confinement serait imposé pour 28 jours : les commerces considérés comme essentiels pourront accueillir la moitié des clients habituels. Les autres seront limités au quart des consommateurs qui peuvent autrement s'y trouver. Les restaurants ne pourront plus accueillir de clients à l'intérieur dans les régions où c'était permis. Les terrasses seront aussi fermées à l'extérieur. Les centres de conditionnement physique et les commerces qui offrent des soins personnels, comme les salons de coiffure, devront fermer.  Certaines activités extérieures, dont le golf, seront permises.  Les lieux de culte pourront demeurer ouverts, mais avec certaines limites. Même chose pour les chantiers de construction.", titre:"Actualité covid"},
      {text:"Le monde entier fait face à une crise sanitaire sans précédent due à la pandémie de Covid-19. On dénombre plus de 128.830.886 cas de coronavirus à travers le monde et 2.798.894 millions de décès. Découvrez le bilan des pays et l'évolution dans le monde concernant l'épidémie de coronavirus ce jeudi 1 avril 2021. Le Maroc suspend ses vols avec la France et l'Espagne. 90% des adultes américains pourraient être vaccinés d'ici le 19 avril. L'Australie suspend son dispositif de soutient aux salaires. La France va récupérer 2 millions des doses d'AstraZeneca découvertes en Italie. L’Espagne va exiger un test PCR négatif à la frontière française. L’Italie annonce la réouverture partielle des écoles. L'Allemagne classe la France en zone à haut risque. Le Danemark prolonge de 3 semaines la suspension du vaccin AstraZeneca. Un couvre feu de 3 semaines est instauré en Martinique. Le Chili entre en confinement dur. ", titre:"nombre de cas"},
      {text:"La plupart des vaccins contre la COVID-19 déployés dans le monde sont destinés aux adultes, qui courent plus de risque s’ils contractent le coronavirus. Le vaccin de Pfizer est autorisé pour les 16 ans et plus. Mais la vaccination des enfants de tous âges sera essentielle pour mettre fin à la pandémie — et aider les écoles à fonctionner un peu plus normalement après des mois de perturbations.  Les données préliminaires d’une étude portant sur 2260 volontaires américains âgés de 12 à 15 ans ont montré qu’il n’y avait eu aucun cas de COVID-19 parmi les adolescents entièrement vaccinés, contre 18 parmi ceux qui ont reçu des injections factices, a rapporté Pfizer.  Il s’agit d’une petite étude, qui n’a pas encore été publiée. Un autre élément important est la forte stimulation du système immunitaire des enfants offerte par les injections. Les chercheurs ont signalé des niveaux élevés d’anticorps chez les adolescents de l’étude, soit un peu plus élevés que ceux observés dans les études sur les jeunes adultes.  Les enfants ont eu des effets secondaires comparables à ceux ressentis par les jeunes adultes, a indiqué la société. Les principaux effets indésirables sont la douleur, la fièvre, les frissons et la fatigue, en particulier après la deuxième dose. L’étude continuera à suivre les participants pendant deux ans pour plus d’informations sur la protection et la sécurité à long terme.  Pfizer et son partenaire allemand BioNTech prévoient dans les semaines à venir demander à la Food and Drug Administration américaine et aux régulateurs européens d’autoriser l’utilisation d’urgence des injections à partir de 12 ans.  « Nous partageons l’urgence d’étendre l’utilisation de notre vaccin », a déclaré le PDG de Pfizer Albert Bourla dans un communiqué. Il a exprimé « l’espoir de commencer à vacciner cette tranche d’âge avant la prochaine rentrée scolaire » aux États-Unis.  Pfizer n’est pas la seule entreprise qui cherche à abaisser l’âge minimal pour recevoir son vaccin. Les résultats d’une étude américaine sur le vaccin de Moderna chez des jeunes de 12 à 17 ans sont également attendus.  Mais signe que les résultats étaient prometteurs, la FDA a déjà permis aux deux sociétés de commencer des études américaines sur des enfants de 11 ans et moins, et aussi jeunes que 6 mois.  AstraZeneca a commencé le mois dernier une étude de son vaccin chez des enfants de 6 à 17 ans en Grande-Bretagne. Johnson & Johnson planifie ses propres études pédiatriques. Et en Chine, Sinovac a récemment annoncé avoir soumis des données préliminaires aux régulateurs chinois montrant que son vaccin est sans danger chez les enfants dès l’âge de 3 ans.  Alors que la plupart des vaccins contre la COVID-19 utilisés dans le monde ont d’abord été testés sur des dizaines de milliers d’adultes, les études pédiatriques n’auront pas besoin d’être aussi importantes. Les scientifiques ont déjà des informations sur la sécurité du vaccin grâce à ces études et à la vaccination de millions d’adultes.  La question clé est la posologie : Pfizer a donné aux participants de 12 ans et plus la même dose que les adultes reçoivent, tout en testant différentes doses chez les enfants plus jeunes.  On ne sait pas à quelle vitesse la FDA réagira à la demande de Pfizer d’autoriser la vaccination à partir de l’âge de 12 ans. ", titre:"Vaccin"}
      ],
    } 
  },
}
</script>

<style>
.NewsCard {
  margin: 20px;
}
</style>
