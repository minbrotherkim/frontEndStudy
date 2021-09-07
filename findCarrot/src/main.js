"use strict";
import PopUp from "./popup.js";
import GameBuilder from "./game.js";

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .gameDuration(10)
  .carrotCount(10)
  .bugCount(10)
  .build();

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case "canceled":
      message = "Replay?";
      break;
    case "win":
      message = "You Won!";
      break;
    case "lose":
      message = "You Lost...";
      break;
    default:
      throw new Error("not valid reason");
      break;
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
