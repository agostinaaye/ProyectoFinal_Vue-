const routes = [
  {
    name: "ListSeries",
    path: "/",
    component: () => import("./pages/ListSeries.vue"),
  },
  {
    name: "serie",
    path: "/serie/:NombreSerie/:id",
    component: () => import("./pages/DetalleSerie.vue"),
  },
  {
    name: "capitulo",
    path: "/serie/:NombreSerie/:idSerie/capitulo/:id",
    component: () => import("./pages/Capitulo.vue"),
  },
];

export default routes;
