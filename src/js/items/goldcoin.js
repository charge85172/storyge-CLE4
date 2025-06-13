import { Prop } from "./prop.js"
import { Resources } from "../resources.js"

export class GoldCoin extends Prop {
    constructor(pos) {
        const goldCoinSprite = Resources.GoldCoin.toSprite()
        super({
            pos: pos,
            sprite: goldCoinSprite,
            scale: 1 // Adjust scale as needed
        })
    }
}
