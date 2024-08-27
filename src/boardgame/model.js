import { Schema, model } from "mongoose";

const BoardgameSchema = new Schema(
  {
    title: String,
    genere: String,
    minPlayers: Number,
    maxPlayers: Number,
    playingTime: Number, //Minutes
    age: Number,
  },
  {
    timestamps: true,
  }
);

const Boardgame = model("Boardgame", BoardgameSchema);

export default Boardgame;
