import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class HangedPlant extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.HangedPlant.width, height: Resources.HangedPlant.height })
        this.graphics.use(Resources.HangedPlant.toSprite())
        this.scale = new Vector(0.2, 0.2)

        this.tag = "item";

    }
}
