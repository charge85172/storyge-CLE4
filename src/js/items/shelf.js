import { Resources } from "../resources.js"
import { Actor, Vector } from "excalibur";

export class Shelf extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Shelf.width, height: Resources.Shelf.height })
        this.graphics.use(Resources.Shelf.toSprite())
        this.scale = new Vector(1, 1)
        this.tag = "item";

    }
    
}
