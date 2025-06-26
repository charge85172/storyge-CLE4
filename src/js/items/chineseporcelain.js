import { Resources } from "../resources.js"
import { Actor, Vector, Axes } from "excalibur";

export class ChinesePorcelain extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.ChinesePorcelain.width, height: Resources.ChinesePorcelain.height })
        this.graphics.use(Resources.ChinesePorcelain.toSprite())
        this.scale = new Vector(0.1, 0.1)

        this.tag = "chineseItem"

        this.currentIndex = 0;
        this.canMove = true; // Kan bewegen na spawnen


        // 7 seconde om te bewegen
        setTimeout(() => {
            this.canMove = false;
            console.log("Movement disabled after spawn");
        }, 5000); // Na 7 seconden kan je niet meer bewegen. Je moeder met je item verplaatsen.
    }

    // Dit als controller code gebruikt van de snippets - Airissa
    onPreUpdate(engine) {
        if (!engine.mygamepad) return;
        if (!this.canMove) return;

        // Haal de stick-waarden op
        const x = engine.mygamepad.getAxes(Axes.LeftStickX);
        const y = engine.mygamepad.getAxes(Axes.LeftStickY);

        // Pas de positie aan (snelheid kun je aanpassen)
        this.pos.x += x * 5;
        this.pos.y += y * 5;
    }
}
