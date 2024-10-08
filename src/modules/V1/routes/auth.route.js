const authRouter = require("express").Router();
const handler = require("../controllers/auth.controller");

authRouter.post("/", handler.signUp);
authRouter.post("/login", handler.login);

authRouter.get("/", handler.getUser);
authRouter.post("/add", handler.addUser);
authRouter.get("/users", handler.getUsers);

module.exports = authRouter;
