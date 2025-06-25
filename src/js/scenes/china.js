import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";
import { Box } from "../items/box.js";
import { UI } from "../ui.js";

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

        this.ui = new UI();
        this.add(this.ui);
        this.createGrid();
    }

    createGrid() {
        for (let i = 0; i < 25; i++) {
            let column = Math.round(Math.random() * 12)
            let row = Math.round(Math.random() * 8)

            let pos = new Vector(column * 100, row * 100)
        }
    }

    onActivate(context) {
        const engine = this.engine;
        // Only place item if not already present
        if (engine.itemToPlaceInChina) {
            // Remove any existing item of the same type
            this.actors.forEach(actor => {
                if (actor instanceof engine.itemToPlaceInChina) {
                    actor.kill();
                }
            });
            const item = new engine.itemToPlaceInChina();
            item.pos = new Vector(400, 360); // Set default placement
            this.add(item);
            console.log("Chinese item placed in the China scene after correct answer.");
            engine.itemToPlaceInChina = null;
        }
    }
}