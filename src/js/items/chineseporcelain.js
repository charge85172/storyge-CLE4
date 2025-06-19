import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";


export class ChinesePorcelain extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChinesePorcelain.width, height: Resources.ChinesePorcelain.height })
        this.graphics.use(Resources.ChinesePorcelain.toSprite())
        this.scale = new Vector(1, 1)
        this.tag = "chineseItem"

    }

}
