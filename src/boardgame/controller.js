import Boardgame from "./model.js";

export const createBoardgame = async (req, res) => {
  try {
    const { title, genere, minPlayers, maxPlayers, playingTime, age } =
      req.body;
    console.log(`Called boardgame/create ${req.body}`);
    if (title && genere && minPlayers && maxPlayers && playingTime && age) {
      const boardgame = new Boardgame({
        title: title,
        genere: genere,
        minPlayers: minPlayers,
        maxPlayers: maxPlayers,
        playingTime: playingTime,
        age: age,
      });
      const result = await boardgame.save();
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "Bad request" });
    }
  } catch (error) {
    console.log("🔥 ERROR (boargame/create): ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
