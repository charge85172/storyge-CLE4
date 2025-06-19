import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Pillar extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Pillar.width, height: Resources.Pillar.height })
        this.graphics.use(Resources.Pillar.toSprite())
        this.scale = new Vector(0.4, 0.4)

        this.tag = "item";

    }

}
