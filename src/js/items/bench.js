import { Actor, Vector } from "excalibur";
import { Resources } from "../resources.js"

export class Bench extends Actor {
    
    constructor(pos) {
        super({pos, width: Resources.Bench.width,height: Resources.Bench.height})
        this.graphics.use(Resources.Bench.toSprite())
        this.scale = new Vector(0.2, 0.2)
        this.tag = "item";
        // console.log(this.label);
    }



    
}
