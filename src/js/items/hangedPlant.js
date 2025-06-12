import { Actor, Vector } from "excalibur"
import { Resources } from "../resources.js"

export class HangedPlant extends Actor {
    constructor(pos) {
        const hangedPlantSprite = Resources.HangedPlant.toSprite()
        hangedPlantSprite.scale = hangedPlantSprite.scale.scale(0.1)
        super({
            pos: pos,
            width: hangedPlantSprite.width,
            height: hangedPlantSprite.height
        })
        this.graphics.use(hangedPlantSprite)
    }
}
