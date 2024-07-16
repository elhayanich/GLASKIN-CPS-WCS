const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const product
   = req.body;
  try {
    const insertId = await tables.product
    .create(product
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const product
     = await tables.product
    .readAll();
    res.json(product
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const product
     = await tables.product
    .readOneById(req.params.id);
    if (product
         == null) {
      res.sendStatus(404);
    } else {
      res.json(product
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const product
   = req.body;
  try {
    const edited = await tables.product
    .update(req.params.id, product
        
    );
    if (edited) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const destroyed = await tables.product
    .destroy(req.params.id);
    if (destroyed) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  readAll,
  readOneById,
  update,
  destroy,
};
