import { Actor, Scene, Vector } from "excalibur";
import { Resources } from "../resources.js";

export class ItemReceiveScreen extends Scene {
    //overbodig
    // constructor() {
    //     super()
    // }
    onActivate(ctx) {
        console.log("ItemReceiveScreen activated");
        // Background
        const engine = this.engine;
        const background = Resources.QuestionBook.toSprite();
        const backgroundActor = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            anchor: Vector.Half
        });
        backgroundActor.graphics.use(background);
        this.add(backgroundActor);
        // Show the item on the left
        if (ctx && ctx.item) {
            ctx.item.pos = new Vector(250, engine.drawHeight / 2);
            this.add(ctx.item);
        }
        // TODO: Add question and options on the right
    }
}