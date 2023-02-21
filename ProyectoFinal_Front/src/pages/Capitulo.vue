<template>
    <div class="container"> 
      <div>
          <h1 class="titulo_3 font-weight-bolder">Capítulo {{ capitulo.numero }} </h1>
          <div class="d-sm-inline-flex p-2 bd-highlight justify-content-around shadow-lg p-4 mb-5 bg-light rounded border border-warning">   
              <div class="">
                  <img :src="capitulo.imagen" class="imagen" :alt="capitulo.nombre">             
              </div>   
              <div class="">
                  <p> <span class="font-weight-bold">Título: </span> <span class="font-italic"> {{ capitulo.nombre }} </span></p>
                  <p><span class="font-weight-bold"> Serie: </span> <span class="font-italic link" @click="goToSerie">{{ capitulo.serie }}</span> </p>
                  <p><span class="font-weight-bold"> Duración: </span><span class="font-italic">{{ capitulo.duracion }}</span></p>       
                  <p><span class="font-weight-bold"> Temporada: </span><span class="font-italic"> {{ capitulo.temporada }} </span><span v-if="capitulo.nombreTemporada!=''" class="font-italic"> - {{ capitulo.nombreTemporada }}</span></p>
                  <p class="text-justify"><span class="font-weight-bold"> Resumen: </span><span class="font-italic">{{ capitulo.resumen }}</span>  </p>
              </div>
          </div>
      </div>

      <div class="accordion accordion-flush shadow-sm" id="accordionFlushExample">
      <div class="accordion-item">
        <h4 class="accordion-header" id="flush-headingOne" v-if="capitulosOrdenados.length > 0">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Capitulos de la Temporada {{ capitulo.temporada }}</button>
        </h4>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <!-- <p v-else>No se encontraron mas capitulos {{ capitulo.temporada }}</p> -->
        <div class="accordion-body list">
            <CapCard v-for="capitulo in capitulosOrdenados" :numero="capitulo.numero" :id="capitulo.id" :imagen="capitulo.imagen" :idSerie="this.idSerie" :NombreSerie="this.NombreSerie" class="list__card_mini" />
        </div>
        </div>
      </div>
      </div>


    </div>
</template>
  
<script>
  import endpoints from '../endpoints'; 
  import CapCard from '../components/CapCard.vue';
  import funciones from '../formato'
  export default { 
    components: {
      CapCard
    },
    name: "Capitulo",    
    computed: {
      capNombre() {
        return funciones.capitalize(this.capitulo.nombre)
      },
      capitulosOrdenados() {
        return funciones.capitulosOrdenados(this.capitulosTemp)
      }
    },
    data(){
     return {
        capitulo: [],
        capitulosTemp: [], 
        id: this.$route.params.id,
        idSerie: this.$route.params.idSerie,
        NombreSerie: this.$route.params.NombreSerie,
      }
    },
    // beforeRouteUpdate (to, from, next) {
    //   this.id = to.params.id   
    // },
    created() { 
      endpoints.getCapitulo(this.id).then((cap) => { 
          this.capitulo = cap;          
        }),
      endpoints.getCapList(this.idSerie).then((list) => { 
          this.capitulosTemp=list.filter(cap => (cap.id != this.id && cap.temporada==this.capitulo.temporada));
        })
      },
      methods: {
        goToSerie() {
          this.$router.push({ name: 'serie', params: { id: this.idSerie, NombreSerie: this.NombreSerie }}) 
        }
      }
    }
</script>
  
<style>
.titulo_3 {
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: space-around;
  padding: 5px;
  background: linear-gradient(to right, rgba(171, 145, 132, 0.733), rgba(183, 165, 168, 0.905));
}

.titulo_3:hover {
  box-shadow: 0 0 20px gray;
  transform: scale(105%);
}

.link{
  color: rgb(222, 147, 73);
}

.link:hover {
    color: rgb(173, 74, 25);
    cursor: pointer;
    text-decoration: underline;
}

/**container, card-img-top, list, list__card_mini y list__card_mini:hover definidos en stule.css
clases comunes entre dos o mas paginas */

</style>