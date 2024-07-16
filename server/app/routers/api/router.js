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

/* *******************CATEGORY********************************** */

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

/* ********************PRODUCT********************************** */

const productRouter = require("./product/router");

router.use("/product", productRouter);

/* **********************TIPS********************************** */

const tipsRouter = require("./tips/router");

router.use("/tips", tipsRouter);


/* *********************SKINTYPE********************************** */

const skintypeRouter = require("./skinType/router");

router.use("/skintype", skintypeRouter);

/* **********************HAIRTYPE********************************** */

const hairtypeRouter = require("./hairType/router");

router.use("/hairtype", hairtypeRouter);


module.exports = router;
