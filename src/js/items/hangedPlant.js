import { Prop } from "./prop.js"
import { Resources } from "../resources.js"

export class HangedPlant extends Prop {
    constructor(pos) {
        const hangedPlantSprite = Resources.HangedPlant.toSprite()
        super({
            pos: pos,
            sprite: hangedPlantSprite,
            scale: 0.1
        })
    }
}
