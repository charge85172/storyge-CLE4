import { Actor, Scene, Vector, Color } from "excalibur";
import { Resources } from "../resources.js";
import { Bench } from "../items/bench.js";
import { Lamp } from "../items/lamp.js";
import { Pillar } from "../items/pillar.js";
import { HangedPlant } from "../items/hangedPlant.js";
import { Chinesefan } from "../items/chinesefan.js";
import { GoldCoin } from "../items/goldcoin.js";
import { GoldIngot } from "../items/goldingot.js";
import { Scroll } from "../items/scroll.js";

export class ItemReceiveScreen extends Scene {

    onInitialize(engine){
        this.drawBackground(engine)
    }

    onActivate(ctx) {
        if(ctx?.data?.id) {
            // hier krijg je een ID binnen
            console.log("book received item: " + ctx.data.id);
            // plaats het juiste object voor dit ID in het book
            const item = this.createReceivedItem(ctx.data.id)
            this.add(item)

            // schaal en pos kan je hier ook nog aanpassen
            item.pos = new Vector(360, 360);
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

    createReceivedItem(idx) {
        switch (idx) {
            case 0:
                return new Bench(new Vector(200, 360));
            case 1:
                return new Lamp(new Vector(200, 360));
            case 2:
                return new Pillar(new Vector(200, 360));
            case 3:
                return new HangedPlant(new Vector(200, 360));
            case 4:
                return new Chinesefan(new Vector(200, 360));
            case 5:
                return new GoldCoin(new Vector(200, 360));
            case 6:
                return new GoldIngot(new Vector(200, 360));
            case 7:
                return new Scroll(new Vector(200, 360));
            default:
                console.error("Dit item bestaat dus niet:", idx);
                return null;
        }
    }
}