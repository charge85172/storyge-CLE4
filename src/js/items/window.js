import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Window extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Window.width, height: Resources.Window.height })
        this.graphics.use(Resources.Window.toSprite())
        this.scale = new Vector(1, 1)
    }
}
