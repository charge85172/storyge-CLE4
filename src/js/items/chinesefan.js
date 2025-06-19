import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Chinesefan extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChineseFan.width, height: Resources.ChineseFan.height })
        this.graphics.use(Resources.ChineseFan.toSprite())
        this.scale = new Vector(0.2, 0.2)

        // voorbeeld als je wil kunnen zien of dit item chinese is
        // this.tag = "chinese"
        this.tag = "chineseItem"

        // console.log(this.label);
    }
}
