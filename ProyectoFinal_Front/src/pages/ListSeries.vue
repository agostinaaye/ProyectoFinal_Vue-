<template>
  <div class="page">
    <div class="container">
    <div class="titulo_1 shadow-lg rounded">
    <h1 class="text-center font-weight-bolder">Lista de Series ({{count}})</h1>
    </div>
  </div>
    <div class="list">
      <SerieCard v-for="serie in serieList" :nombre="serie.nombre" :id="serie.id" :imagen="serie.imagen" class="list__card" />
    </div>
  </div>
</template>

<script>
import endpoints from '../endpoints';
import SerieCard from '../components/SerieCard.vue';
export default {
  components: {
    SerieCard
  },
  name: "listSeries",
  data(){
   return {
      count: 0,
      serieList: [],
    }
  },
  created() {
    this.getSerieList().then((result) => {
      this.count = result.length
    });
   },
  methods: {
    getSerieList() {
      let result = endpoints.getSerieList().then((list) => { 
        return this.serieList = list;
      })
      return result
    } 
  }
  }
</script>

<style>
.list__card {
  min-width: 300px;
  padding: 10px;
  transition: 200ms ease;
  cursor: pointer;
}

.list__card:hover {
  box-shadow: 0 0 40px gray;
  transform: scale(105%);
}

.titulo_1{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  padding: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(232, 232, 230, 0.655),
    rgba(242, 242, 245, 0.511)
  ), url("https://firebasestorage.googleapis.com/v0/b/series-1b4c4.appspot.com/o/fondo%2F22378664_6574814.jpg?alt=media&token=042dfb87-59bc-41a3-bdbe-69b5b48fe5a4"); 
}

.titulo_1:hover {
  box-shadow: 0 0 20px gray;
  transform: scale(105%);
}

/* list definida en style.css
clase comun entre dos o mas páginas */

</style>