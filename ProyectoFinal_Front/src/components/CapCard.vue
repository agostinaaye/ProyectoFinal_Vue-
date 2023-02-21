<template>
    <div class="card" @click="goToCapDetails">
      <div class="card__imagen_mini">
        <img :src="imagen" class="card-img_mini" :alt="this.numero">
      </div>
      <h4 class="card-titulo_mini">Capítulo {{ this.numero }}</h4>
    </div>
</template>

<script>
  export default {
    name: "CapCard",
    props: ['numero', 'id', 'imagen', 'idSerie', 'NombreSerie'],
     methods: {
      goToCapDetails() {
        this.$router.push({ name: 'capitulo', params: { id: this.id, idSerie: this.idSerie, NombreSerie: this.NombreSerie }}) 
        //se mueve a la ruta llamada "capitulo" (definida en routes.js) y envia como parametros "id" y "NombreSerie"
      }
    }
  };
</script>

<style> 
  .card__imagen_mini {
    width: 150px;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
  } 
  
  .card-img_mini {
    width: 150px;
    height: 150px;
    margin: auto;
    padding: 10px 10px 0px 10px;
  }
  
  .card-titulo_mini {
    margin: 10px;
    text-align: center;
  }
</style>

