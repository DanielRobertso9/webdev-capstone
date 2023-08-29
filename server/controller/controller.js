const { sequelize } = require("../util/database");

module.exports = {
  getEvents: async (req, res) => {
    try {
      const Events = await sequelize.query(
        `SELECT * FROM "public.Events"`
      );
      res.status(200).send(Events);;
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  getFavorites: async (req, res) => {
    try {
      const Favorites = await sequelize.query(
        `SELECT * FROM "public.Favorites"`
      );
      res.status(200).send(Favorites);;
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addFavorite: async (req, res) => {
    const { Title, ID } = req.body;
    try {
      const newFavorite = await sequelize.query(
        `INSERT INTO "public.Favorites" ("Title", "ID") VALUES ('${Title}', '${ID}')`
      );
      res.status(200).send(newFavorite);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
  addEvent: async (req, res) => {
    const { Title, ID, Type, Start, End } = req.body;
    try {
      const newEvent = await sequelize.query(
        `INSERT INTO "public.Events" ("Title", "ID", "Type", "Start", "End") VALUES ('${Title}', '${ID}', '${Type}', '${Start}', '${End}')`
      );
      res.status(200).send(newEvent);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
};
