const { isValidIMEI } = require("../controlles/imeiControllers");

const router = require("express").Router();

router.get("/check/:imei", isValidIMEI);

module.exports = router;
