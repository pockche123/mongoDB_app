const { Router } = require('express');

const snackController = require('../controllers/snack.js');

const snackRouter = Router();

snackRouter.get("/", snackController.index);
snackRouter.get("/top", snackController.getTop);
snackRouter.get("/:id", snackController.show);
snackRouter.post("/", snackController.create);
snackRouter.patch("/:id", snackController.update);
snackRouter.delete("/:id", snackController.destroy);

module.exports = snackRouter;