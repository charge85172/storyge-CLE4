import { Vector } from "excalibur";
import { Resources } from "../resources.js"

export class Plant extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Plant.width, height: Resources.Plant.height })
        this.graphics.use(Resources.Plant.toSprite())
        this.scale = new Vector(0.2, 0.2)

        this.tag = "item";

    }
}
