// Functions for UPDATE HTTPMethods
const db = require('../db');

const updateDeuda = async (req) => {
  try {
    const { pendiente } = req.body;
    const today = new Date();
    const date = `${(today.getMonth() + 1).toString()}-${today.getDate().toString()}-${today.getFullYear().toString()}`;
    const text = `UPDATE deuda SET fecha='${date}' , pendiente='${pendiente}' WHERE id_worker='${req.params.idWorker}';`;
    await db.query(text, (err) => {
      if (err) throw err;
    });
    return (req.body);
  } catch (e) {
    return (e);
  }
};

module.exports = {
  updateDeuda,
};
