const router = require("express").Router();

function indexRoute(_, res) {
  return res
    .status(200)
    .send({ Message: "MPOS API Server — where transactions come to life! 🌟" });
}

router.get("/", indexRoute);

// Application routes.

module.exports = router;
