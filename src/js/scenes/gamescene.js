import { Actor, Scene, Vector, Color } from "excalibur";
import { Resources } from "../resources.js";
import { UI } from "../ui.js";


export class GameScene extends Scene {

    ui;

    onInitialize(){
      
        const bgSprite = Resources.Background.toSprite()
        const bgActor = new Actor({
            pos: new Vector(bgSprite.width / 2, bgSprite.height / 2),
            width: bgSprite.width,
            height: bgSprite.height
        })
        bgActor.graphics.use(bgSprite)
        this.add(bgActor)
        this.createGrid

        this.ui = new UI();
        this.add(this.ui);
    }

    onActivate(ctx, engine) {
        console.log("game scene activated");
    }

    createGrid() {
    for (let i = 0; i < 25; i++) {
            let column = Math.round(Math.random() * 12)
            let row = Math.round(Math.random() * 8)

            let pos = new Vector(column * 100, row * 100)
            this.add(new Bench(pos))
        }
}
}

