import { Actor, Scene, Vector, Color } from "excalibur";
import { Resources } from "../resources.js";
import { Bench } from "../items/bench.js"

export class ItemReceiveScreen extends Scene {

    onInitialize(engine){
        this.drawBackground(engine)
    }

    onActivate(ctx) {
        if(ctx?.data?.item) {
            console.log("book screen received an item");
            console.log(ctx.data.item.constructor.name);
            // hier krijg je een Bench of ander object binnen
            this.add(ctx.data.item)

            // als het item in het book een andere positie / schaal heeft kan je dat hier aanpassen
            ctx.data.item.pos = new Vector(360, 360);
        }
    }

    onDeactivate() {
        // hier moet je items weer verwijderen als die later niet meer nodig zijn
    }

    drawBackground(engine){
        const background = Resources.QuestionBook.toSprite();
        const backgroundActor = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight,
            anchor: Vector.Half
        });
        backgroundActor.graphics.use(background);
        this.add(backgroundActor);
    }
}