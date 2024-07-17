const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ********************USER********************************** */

const userRouter = require("./user/router");

router.use("/user", userRouter);

/* *******************FAVORITE********************************** */

const favoriteRouter = require("./favorite/router");

router.use("/favorite", favoriteRouter);

/* **********************TIPS********************************** */

const tipsRouter = require("./tips/router");

router.use("/tips", tipsRouter);
/* **********************SKINPRODUCT********************************** */

const skinproductRouter = require("./skinproduct/router");

router.use("/skinproduct", skinproductRouter);
/* **********************HAIRPRODUCT********************************** */

const hairproductRouter = require("./hairproduct/router");

router.use("/hairproduct", hairproductRouter);








module.exports = router;
