const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const user
   = req.body;
  try {
    const insertId = await tables.user
    .create(user
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const user
     = await tables.user
    .readAll();
    res.json(user
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const user
     = await tables.user
    .readOneById(req.params.id);
    if (user
         == null) {
      res.sendStatus(404);
    } else {
      res.json(user
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const user
   = req.body;
  try {
    const edited = await tables.user
    .update(req.params.id, user
        
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
    const destroyed = await tables.user
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
