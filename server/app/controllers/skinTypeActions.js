const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const skinType
  
   = req.body;
  try {
    const insertId = await tables.skinType
    
    .create(skinType
        
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const skinType
    
     = await tables.skinType
     
    .readAll();
    res.json(skinType
        
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const skinType
    
     = await tables.skinType
     
    .readOneById(req.params.id);
    if (skinType
        
         == null) {
      res.sendStatus(404);
    } else {
      res.json(skinType
        
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const skinType
  
   = req.body;
  try {
    const edited = await tables.skinType
    
    .update(req.params.id, skinType
        
        
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
    const destroyed = await tables.skinType
    
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
