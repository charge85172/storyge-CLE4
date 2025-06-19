import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class WukongStaff extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseWukongStaff.width, height: Resources.ChineseWukongStaff.height })
        this.graphics.use(Resources.ChineseWukongStaff.toSprite())
        this.scale = new Vector(1, 1)
        this.tag = "chineseItem"

    }
}
