import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Box } from "../items/props/prop-classes/box.js";

export class China extends Scene {
    //overbodig
    // constructor() {
    //     super()
    // }

    onInitialize(engine) {
        const background = Resources.Room.toSprite();
        const backgroundActor = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            anchor: Vector.Half
        });
        backgroundActor.graphics.use(background);
        this.add(backgroundActor);

        const box = new Box(engine);
        this.add(box);
    }
}
