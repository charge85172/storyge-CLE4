import { Resources } from "../resources.js"
import { Actor, Vector, Axes } from "excalibur";

export class Pillar extends Actor {
    constructor(pos) {
        super({ pos, width: Resources.Pillar.width, height: Resources.Pillar.height })
        this.graphics.use(Resources.Pillar.toSprite())
        this.scale = new Vector(0.57, 0.57)
        this.tag = "item";
       
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