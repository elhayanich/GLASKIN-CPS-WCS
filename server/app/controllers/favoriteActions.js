const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const favorite
   = req.body;
  try {
    const insertId = await tables.favorite
    .create(favorite
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const favorite
     = await tables.favorite
    .readAll();
    res.json(favorite
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const favorite
     = await tables.favorite
    .readOneById(req.params.id);
    if (favorite
         == null) {
      res.sendStatus(404);
    } else {
      res.json(favorite
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const favorite
   = req.body;
  try {
    const edited = await tables.favorite
    .update(req.params.id, favorite
        
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
    const destroyed = await tables.favorite
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
