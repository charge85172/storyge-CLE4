import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { BoxOpen } from "../items/props/prop classes/boxopen.js";
import { BoxClosed } from "../items/props/prop classes/boxclose.js";
import { Box } from "../items/props/prop classes/box.js";

export class China extends Scene {
    constructor() {
        super();
    }

    onInitialize(engine) { // Code by Sissi
        const background = Resources.Room1.toSprite();
        const backgroundActor = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            anchor: Vector.Half
        });
        backgroundActor.graphics.use(background);
        this.add(backgroundActor);

        const box = new Box(engine); // Code by Sissi
        this.add(box);
    }
}
