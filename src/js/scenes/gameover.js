import { Scene, Label, Color, Vector } from "excalibur"
import { Resources } from "../resources.js";

export class GameOverScreen extends Scene {
  onInitialize(engine) {
    const label = new Label({
      text: "Thank you for playing our demo! Press Ctrl+R to restart.",
      pos: new Vector(250, 360),
      font: Resources.PressStart2P.toFont({ size: 12 }),
      color: Color.White,
      anchor: new Vector(0.5, 0.5)
    })
    this.add(label)
  }
}
