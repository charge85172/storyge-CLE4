import { Prop } from "../prop.js"
import { Resources } from "../../../resources.js"

export class BoxOpen extends Prop {
    constructor(engine) {
        const boxOpenSprite = Resources.BoxOpen.toSprite();
        // Calculate bottom center position
        const x = engine.drawWidth / 2;
        const y = engine.drawHeight - (boxOpenSprite.height * 0.15) / 2; // 0.15 is the scale
        super({
            pos: { x, y },
            sprite: boxOpenSprite,
            scale: 0.15 // Adjust scale as needed
        });
    }
}
