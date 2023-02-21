<template>
    <div class="card" @click="goToSerieDetails">
      <div class="card__image">
        <img :src="imagen" class="card-img-top" :alt="serieNombre">
      </div>
      <h4 class="card-title">{{ serieNombre }}</h4>
    </div>
</template>

<script>
  import funciones from '../formato'
  export default {
    name: "SerieCard",
    props: ['nombre', 'id', 'imagen'],
    computed: {
      serieNombre() {
        return funciones.capitalize(this.nombre)
      }
    },
    methods: {
      goToSerieDetails() {
        this.$router.push({ name: 'serie', params: { id: this.id, NombreSerie: this.serieNombre}}) //salta a la ruta llamada "serie"
      }
    }
  };
</script>

<style>
  .card__image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    overflow: hidden;
  }
   
  .card-img-top{
    width: 300px;
    height: 300px;
    margin: auto;
    padding: 10px 10px 0px 10px;
  }
  
  .card-title {
    margin: 15px;
    text-align: center;
  }
</style>

