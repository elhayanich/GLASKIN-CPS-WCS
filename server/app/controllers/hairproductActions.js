const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const hairproduct
   = req.body;
  try {
    const insertId = await tables.hairproduct
    .create(hairproduct
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const hairproduct
     = await tables.hairproduct
    .readAll();
    res.json(hairproduct
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const hairproduct
     = await tables.hairproduct
    .readOneById(req.params.id);
    if (hairproduct
         == null) {
      res.sendStatus(404);
    } else {
      res.json(hairproduct
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const hairproduct
   = req.body;
  try {
    const edited = await tables.hairproduct
    .update(req.params.id, hairproduct
        
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
    const destroyed = await tables.hairproduct
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
