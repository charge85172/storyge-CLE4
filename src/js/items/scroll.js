import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Scroll extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseScroll.width, height: Resources.ChineseScroll.height })
        this.graphics.use(Resources.ChineseScroll.toSprite())
        this.scale = new Vector(0.2, 0.2)

    }
}
