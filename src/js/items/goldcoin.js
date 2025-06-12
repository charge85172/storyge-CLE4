import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"

export class GoldCoin extends Actor {
    constructor() {
        super({
            width: Resources.GoldCoin.width,
            height: Resources.GoldCoin.height
        });
    }

    onInitialize() {
        this.graphics.use(Resources.GoldCoin.toSprite());
    }
}
