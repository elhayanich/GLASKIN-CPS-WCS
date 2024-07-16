const tables = require("../../database/tables");

const create = async (req, res, next) => {
  const tips
  
   = req.body;
  try {
    const insertId = await tables.tips
    
    .create(tips
        
        
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const readAll = async (req, res, next) => {
  try {
    const tips
    
     = await tables.tips
     
    .readAll();
    res.json(tips
        
        
    );
  } catch (err) {
    next(err);
  }
};

const readOneById = async (req, res, next) => {
  try {
    const tips
    
     = await tables.tips
     
    .readOneById(req.params.id);
    if (tips
        
         == null) {
      res.sendStatus(404);
    } else {
      res.json(tips
        
        
      );
    }
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const tips
  
   = req.body;
  try {
    const edited = await tables.tips
    
    .update(req.params.id, tips
        
        
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
    const destroyed = await tables.tips
    
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
