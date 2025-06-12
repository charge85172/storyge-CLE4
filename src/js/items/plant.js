import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"

export class Plant extends Actor {
    constructor(pos) {
        const plantSprite = Resources.Plant.toSprite()
        plantSprite.scale = plantSprite.scale.scale(0.1)
        super({
            pos: pos,
            width: plantSprite.width,
            height: plantSprite.height
        })
        this.graphics.use(plantSprite)
    }
}
