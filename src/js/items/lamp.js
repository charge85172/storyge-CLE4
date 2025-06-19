import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Lamp extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Lamp.width, height: Resources.Lamp.height })
        this.graphics.use(Resources.Lamp.toSprite())
        this.scale = new Vector(0.25,0.25)
        this.tag = "item";

    }
}
