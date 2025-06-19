import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class GoldCoin extends Actor {
    // label;
    constructor(pos) {
        super({ pos, width: Resources.ChineseGoldCoin.width, height: Resources.ChineseGoldCoin.height })
        this.graphics.use(Resources.ChineseGoldCoin.toSprite())
        this.scale = new Vector(0.2, 0.2)

        // this.label = "chineseItem";
        this.tag = "chineseItem"

        // console.log(this.tag);
    }

}
