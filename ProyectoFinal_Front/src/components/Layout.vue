<template>
    <div class="layout">
      <div class="layout__title">
        <RouterLink :to="{ name: 'ListSeries' }" class="layout__link layout__title__home">SeriesVue</RouterLink>
        <img src="../assets/facet.png" alt=" facet" />
      </div>
    </div>
  </template>
  
  <style scoped>
  .layout {
    position: fixed;
    width: 100%;
    box-shadow: 1px 1px 10px 0 black;
    z-index: 100;
  }
 
  .layout__title {
    margin: 0;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
  }
  
  .layout__title__home {
    font-weight: bolder;
    color: white;
    font-size: 24px;
    text-decoration: none;
  }
  
  .layout__title img {
    height: 50px;
  }
  
  nav {
    padding: 12px 30px;
    background-color: darkcyan;
    display: flex;
    justify-content: flex-start;
    color: white;
  }
  
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .navigation {
    color: white;
    margin-right: 2rem;
    text-decoration: none;
  }
  
  .navigation:hover {
    color: blanchedalmond;
  }
  
  .layout__nav__route {
    margin-right: 30px;
    font-weight: 600;
  }
  
  .layout__link {
    text-decoration: none;
    color: white;
  }
  
  .layout__link:hover {
    color: rgb(199, 195, 190);
  }
  </style>
  