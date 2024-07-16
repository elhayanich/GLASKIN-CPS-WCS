const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const category
   = req.body;
  try {
    const insertId = await tables.category
    .create(category
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const category
     = await tables.category
    .readAll();
    res.json(category
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const category
     = await tables.category
    .readOneById(req.params.id);
    if (category
         == null) {
      res.sendStatus(404);
    } else {
      res.json(category
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const category
   = req.body;
  try {
    const edited = await tables.category
    .update(req.params.id, category
        
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
    const destroyed = await tables.category
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

