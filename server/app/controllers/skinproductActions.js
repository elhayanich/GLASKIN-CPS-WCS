const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const skinproduct
   = req.body;
  try {
    const insertId = await tables.skinproduct
    .create(skinproduct
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const skinproduct
     = await tables.skinproduct
    .readAll();
    res.json(skinproduct
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const skinproduct
     = await tables.skinproduct
    .readOneById(req.params.id);
    if (skinproduct
         == null) {
      res.sendStatus(404);
    } else {
      res.json(skinproduct
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const skinproduct
   = req.body;
  try {
    const edited = await tables.skinproduct
    .update(req.params.id, skinproduct
        
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
    const destroyed = await tables.skinproduct
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
