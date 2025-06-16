import { Actor, Vector } from "excalibur";
import { Resources } from "../../../resources.js";

export class Box extends Actor {
    constructor(engine) {
        const scale = 0.15;
        const closedSprite = Resources.BoxClosed.toSprite();
        closedSprite.scale = new Vector(scale, scale);
        // Bottom center position
        const x = engine.drawWidth / 2;
        const y = engine.drawHeight - (closedSprite.height * scale) / 2 - 40;
        super({
            pos: new Vector(x, y),
            width: closedSprite.width * scale,
            height: closedSprite.height * scale,
            anchor: Vector.Half
        });
        this.graphics.use(closedSprite);
        this.openSprite = Resources.BoxOpen.toSprite();
        this.openSprite.scale = new Vector(scale, scale);
        this.isOpen = false;
        this.on("pointerup", () => this.openBox());
    }

    openBox() {
        if (this.isOpen) return;
        this.graphics.use(this.openSprite);
        this.isOpen = true;
    }
}
