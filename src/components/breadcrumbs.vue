<template>
  <div>
    <v-breadcrumbs class = "text">
      {{text}}
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    props: {
      'text' :String,
    },
    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>
.Text{
  font-size: 18px;
}
</style>