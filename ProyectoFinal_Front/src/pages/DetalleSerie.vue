<template>
    <div class="container">
      <div>
      <h1 class="titulo_2 text-center font-weight-bolder text-shadow-lg">{{ serieNombre }} </h1>
       <div class="d-sm-inline-flex p-2 bd-highlight justify-content-around shadow-lg p-4 mb-5 bg-light rounded">
          <div class="">
              <img :src="detalleSerie.imagen" class="imagen" :alt="detalleSerie.nombre">
          </div>
          <div class="">
            <p><span class="font-weight-bold"> Género: </span> <span class="font-italic">{{ detalleSerie.genero }}</span></p>
            <p><span class="font-weight-bold"> Cantidad de Temporadas: </span> <span class="font-italic">{{ detalleSerie.cantidadTemp }}</span></p>
            <p ><span class="font-weight-bold"> Autor: </span> <span class="font-italic">{{ detalleSerie.autor }}</span></p>
            <p class="text-justify "><span class="font-weight-bold"> Sínopsis: </span> <span class="font-italic"> {{ detalleSerie.sinopsis }}</span></p>
          </div>
      </div>
      </div>
      <div class="accordion shadow-sm" id="accordionFlushExample">
        <div class="accordion-item">
        <div v-if="this.capitulosxTemporada.length > 0">
            <h4 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Lista de Capítulos</button></h4>

            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">   
              <div  v-for="Temporada in this.capitulosxTemporada">                  
                <div class="accordion-body" v-if="Temporada.length>0">
                <h4 class="text-center text-decoration-underline">Temporada {{ Temporada[0].temporada }} <span v-if="Temporada[0].nombreTemporada!=''"> - {{ Temporada[0].nombreTemporada }}</span></h4> 
                  <div class="list">
                    <CapCard v-for="capitulo in Temporada" :numero="capitulo.numero" :id="capitulo.id" :imagen="capitulo.imagen" :idSerie="this.id" :NombreSerie="serieNombre" class="list__card_mini" />
                  </div>            
                </div>         
              </div>
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
    name: "DetalleSerie",
    computed: {
      serieNombre() {
        return funciones.capitalize(this.detalleSerie.nombre)
      },
      capitulosxTemporada() {
        let capxTemp=[]
        for(let i=0; i<this.detalleSerie.cantidadTemp; i++){
          capxTemp[i]=funciones.capitulosOrdenados(this.capList.filter(cap => (cap.temporada==i+1)));
        }
        return capxTemp
      }
    },
    data(){
     return {
        detalleSerie: [],
        capList: [],
        id: this.$route.params.id,
        banner: '',
      }
    },
    created() {
        endpoints.getSerie(this.id).then((list) => {
          this.detalleSerie = list; 
          this.banner= "url('"+ this.detalleSerie.banner + "')"
        })
        endpoints.getCapList(this.id).then((list) => {
          this.capList = list;
        })       
    },    
  }
</script>

<style>
.titulo_2 {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  padding: 10px;
  background-image: linear-gradient(
    to bottom,
    rgba(232, 232, 230, 0.655),
    rgba(242, 242, 245, 0.511)
  ), v-bind(banner);
}

.titulo_2:hover {
  box-shadow: 0 0 20px gray;
  transform: scale(105%);
}


/**container, card-img-top, list, list__card_mini y list__card_mini:hover definidos en style.css
clases comunes entre dos o mas paginas */

</style>