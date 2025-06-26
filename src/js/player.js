import { Actor, Axes, Buttons, Vector } from "excalibur"
import { Game } from "./game.js"

// Code voor speler met controller input - Airissa
export class Player extends Actor {

    onPreUpdate(engine) {
        if (!engine.mygamepad) {
            return
        }
        // beweging
        const x = engine.mygamepad.getAxes(Axes.LeftStickX)
        const y = engine.mygamepad.getAxes(Axes.LeftStickY)
        this.vel = new Vector(x * 10, y * 10)

        // schieten, springen
        if (engine.mygamepad.isButtonPressed(Buttons.Face1)) {
            console.log('Jump!')
        }
    }
}