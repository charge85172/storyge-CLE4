import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class ChinaRoom extends Scene {
    constructor() {
        super();

    }

    onInitialize(engine) {
        const backgroundRoom2 = Resources.Room2.toSprite()
        const room2Actor = new Actor({
            pos: new Vector(640, 360),
            width: backgroundRoom2.width,
            height: backgroundRoom2.height
        })
        room2Actor.graphics.use(backgroundRoom2)
    }

}
