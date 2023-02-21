<template>
    <div class="app">
    <Layout />
    <router-view :key="$route.path" class="page"></router-view> <!-- renderiza todas las rutas en app -->
    <!--:key="$route.path" hace que recargue este contenedor apenas varía el path de la URL -->
  </div>
  <!-- <ListSeries /> -->

</template>

<script >
import Layout from './components/Layout.vue'
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5em;
}

.app {
  color: #060c12;
  font-family: Roboto, Arial;
}

.page {
  padding: 132px 20px 20px 20px;
}
</style>
