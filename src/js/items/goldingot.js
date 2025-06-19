import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class GoldIngot extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseGoldIngot.width, height: Resources.ChineseGoldIngot.height })
        this.graphics.use(Resources.ChineseGoldIngot.toSprite())
        this.scale = new Vector(1, 1)
        this.tag = "chineseItem"

    }
}
