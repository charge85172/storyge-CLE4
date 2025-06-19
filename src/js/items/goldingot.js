import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class GoldIngot extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseGoldIngot.width, height: Resources.ChineseGoldIngot.height })
        this.graphics.use(Resources.ChineseGoldIngot.toSprite())
        this.scale = new Vector(0.2, 0.2)

        this.tag = "chineseItem"

    }
}
