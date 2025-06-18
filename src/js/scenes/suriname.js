import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class Suriname extends Scene {
    //overbodig
    // constructor() {
    //     super()
    // }

    onInitialize(engine) {
        const backgroundRoom1 = Resources.Room1.toSprite();
        const room1Actor = new Actor({
            pos: new Vector(640, 360),
            width: backgroundRoom1.width,
            height: backgroundRoom1.height
        });
        room1Actor.graphics.use(backgroundRoom1);
        this.add(room1Actor);
    }
}