import { Actor, Scene, Vector, Color } from "excalibur";
import { Resources } from "../resources.js";

export class GameScene extends Scene {

    onInitialize(){
        const bgSprite = Resources.Background.toSprite()
        const bgActor = new Actor({
            pos: new Vector(bgSprite.width / 2, bgSprite.height / 2),
            width: bgSprite.width,
            height: bgSprite.height
        })
        bgActor.graphics.use(bgSprite)
        this.add(bgActor)
    }

    onActivate(ctx, engine) {
        console.log("game scene activated");
    }
}