import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class DragonScroll extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseDragonScroll.width, height: Resources.ChineseDragonScroll.height })
        this.graphics.use(Resources.ChineseDragonScroll.toSprite())
        this.scale = new Vector(1, 1)
        this.tag = "chineseItem"

    }
}
