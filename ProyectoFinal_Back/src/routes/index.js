const { Router } = require("express");
const router = Router();
const { db } = require("../firebase");

router.get("/series", async (req, res) => {
  try {
    const series = await db.collection("series").get();
    const datos = series.docs.map((serie) => {
      return {
        id: serie.id,
        ...serie.data(),
      };
    });
    res.send(datos);
  } catch (err) {
    res.status(500);
  }
});

router.post("/series", async (req, res) => {
  try {
    const body = req.body;
    await db.collection("series").add({
      nombre: body.nombre,
      genero: body.genero,
      cantidadTemp: body.cantidadTemp,
      sinopsis: body.sinopsis,
    });
    res.sendStatus(204);
  } catch (err) {
    res.status(500);
  }
});

router.get("/series/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const serie = await db.collection("series").doc(id).get();
    res.send(serie.data());
  } catch (err) {
    res.status(500);
  }
});

router.put("/series/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection("series").doc(id).update(req.body);
    res.sendStatus(204);
  } catch (err) {
    res.status(500);
  }
});

router.delete("/series/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection("series").doc(id).delete();
    res.sendStatus(204);
  } catch (err) {
    res.status(500);
  }
});

///Capitulos

router.get("/series/:id/capitulos", async (req, res) => {
  try {
    const id = req.params.id;
    const serie = await db.collection("series").doc(id).get();
    Promise.all(
      serie
        .data()
        .listaCap.map((cap) => db.collection("Capitulos").doc(cap).get())
    ).then((resolved) => {
      let listCap = [];
      resolved.forEach((val) => {
        listCap.push({ id: val.id, ...val.data() }); //va agregando cada cap en listCap
      });
      res.send(listCap);
    });
  } catch (err) {
    res.status(500);
  }
});

router.get("/capitulo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const capitulo = await db.collection("Capitulos").doc(id).get();
    res.send(capitulo.data());
  } catch (err) {
    res.status(500);
  }
});

//sin implementar:
// router.put("/series/capitulos/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     await db.collection("series").doc(id).update(req.body);
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500);
//   }
// });

// router.post("/series/capitulos", async (req, res) => {
//   try {
//     const body = req.body;
//     await db.collection("series").add({
//       nombre: body.nombre,
//       genero: body.genero,
//       cantidadTemp: body.cantidadTemp,
//       sinopsis: body.sinopsis,
//     });
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500);
//   }
// });

// router.delete("/series/capitulos/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     await db.collection("series").doc(id).delete();
//     res.sendStatus(204);
//   } catch (err) {
//     res.status(500);
//   }
// });

module.exports = router;
