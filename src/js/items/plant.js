import { Resources } from "../resources.js"

export class Plant extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Plant.width, height: Resources.Plant.height })
        this.graphics.use(Resources.Plant.toSprite())
        this.scale = new Vector(0.1, 0.1)
    }
}
