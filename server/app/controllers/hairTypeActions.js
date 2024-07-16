const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const hairType
   = req.body;
  try {
    const insertId = await tables.hairType
    .create(hairType
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const hairType
     = await tables.hairType
    .readAll();
    res.json(hairType
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const hairType
     = await tables.hairType
    .readOneById(req.params.id);
    if (hairType
         == null) {
      res.sendStatus(404);
    } else {
      res.json(hairType
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const hairType
   = req.body;
  try {
    const edited = await tables.hairType
    .update(req.params.id, hairType
        
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
    const destroyed = await tables.hairType
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
