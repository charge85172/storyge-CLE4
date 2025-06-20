import { Actor, Vector, Keys, Label, Color } from "excalibur";
import { Resources } from "../resources.js";
import { HangedPlant } from "../items/hangedPlant.js";
import { Bench } from "../items/bench.js";
import { Pillar } from "../items/pillar.js";
import { Chinesefan } from "../items/chinesefan.js";
import { GoldCoin } from "../items/goldcoin.js";    
import { GoldIngot } from "../items/goldingot.js";
import { Scroll } from "../items/scroll.js";
import { Lamp } from "../items/lamp.js";
import { ChinesePorcelain } from "../items/chineseporcelain.js";
import { DragonScroll } from "../items/dragonscroll.js";
import { Plant } from "../items/plant.js";
import { Shelf } from "../items/shelf.js";
import { SunWukong } from "../items/sunwukong.js";
import { Window } from "../items/window.js";
import { WukongStaff } from "../items/wukongstaff.js";

// Item ID dat je nodig hebt om Item te spawnen
const ITEM_IDS = {
    BENCH: 1,
    LAMP: 2,
    PILLAR: 3,
    HANGED_PLANT: 4,
    CHINESE_FAN: 5,
    GOLD_COIN: 6,
    GOLD_INGOT: 7,
    SCROLL: 8,
    CHINESE_PORCELAIN: 9,
    DRAGON_SCROLL: 10,
    PLANT: 11,
    SHELF: 12,
    SUN_WUKONG: 13,
    WINDOW: 14, 
    WUKONG_STAFF: 15
    // Voeg andere items toe
};

export class Box extends Actor {
    constructor(engine) {
        super({
            pos: new Vector(640, 560),
            width: Resources.BoxClosed.width * 0.2,
            height: Resources.BoxClosed.height * 0.2,
            anchor: Vector.Half
        });

        const closedSprite = Resources.BoxClosed.toSprite();
        closedSprite.scale = new Vector(0.2, 0.2);
        this.graphics.use(closedSprite);

        this.openSprite = Resources.BoxOpen.toSprite();
        this.openSprite.scale = new Vector(0.2, 0.2);
        this.isOpen = false;
        this.lastGivenItem = null;

        // Add label for prompt
        this.promptLabel = new Label({
            text: "press space to begin unpacking",
            pos: new Vector(-175, 90),
            font: Resources.PressStart2P.toFont({ size: 12 }),
            color: Color.White,
            anchor: Vector.Half
        });
        this.addChild(this.promptLabel);
    }

    onPostUpdate() {
        if (this.scene.engine.input.keyboard.wasPressed(Keys.Space)) {
            if (!this.isOpen) {
                this.openBox();
            } else {
                this.giveRandomItem();
            }
        }
    }

    openBox() {
        if (this.isOpen) return;
        this.graphics.use(this.openSprite);
        this.isOpen = true;

        if (this.promptLabel) {
            this.promptLabel.text = "press space to grab an item";
            this.promptLabel.pos = new Vector(-150, 90);
        }
    }

    giveRandomItem() {
        const id = Math.floor(Math.random() * 16);
        this.lastGivenItem = id;
        this.scene.engine.playerProgress.push(id);

        // Spawn item alleen wanneer correct ID
        if (id === ITEM_IDS.BENCH) {
            const bench = new Bench();
            this.scene.add(bench);
        }
        if (id === ITEM_IDS.LAMP) {
            const lamp = new Lamp();
            this.scene.add(lamp);
        }
        if (id === ITEM_IDS.PILLAR) {
            const pillar = new Pillar();
            this.scene.add(pillar);
        }
        if (id === ITEM_IDS.HANGED_PLANT) {
            const hangedPlant = new HangedPlant();
            this.scene.add(hangedPlant);
        }
        if (id === ITEM_IDS.CHINESE_FAN) {
            const chinesefan = new Chinesefan();
            this.scene.add(chinesefan);
        }
        if (id === ITEM_IDS.GOLD_COIN) {
            const goldCoin = new GoldCoin();
            this.scene.add(goldCoin);
        }
        if (id === ITEM_IDS.GOLD_INGOT) {
            const goldIngot = new GoldIngot();
            this.scene.add(goldIngot);
        }
        if (id === ITEM_IDS.SCROLL) {
            const scroll = new Scroll();
            this.scene.add(scroll);
        }
        if (id === ITEM_IDS.CHINESE_PORCELAIN) {
            const chineseporcelain = new ChinesePorcelain();
            this.scene.add(chineseporcelain);
        }
        if (id === ITEM_IDS.DRAGON_SCROLL) {
            const dragonscroll = new DragonScroll();
            this.scene.add(dragonscroll);
        }
        if (id === ITEM_IDS.PLANT) {
            const plant = new Plant();
            this.scene.add(plant);
        }
        if (id === ITEM_IDS.SHELF) {
            const shelf = new Shelf();
            this.scene.add(shelf);
        }
        if (id === ITEM_IDS.SUN_WUKONG) {
            const sunWukong = new SunWukong();
            this.scene.add(sunWukong);
        }
        if (id === ITEM_IDS.WINDOW) {
            const window = new Window();
            this.scene.add(window);
        }
        if (id === ITEM_IDS.WUKONG_STAFF) {
            const wukongStaff = new WukongStaff();
            this.scene.add(wukongStaff);
        }

        this.scene.engine.goToScene('itemreceivescreen', {
            sceneActivationData: { id }
        });
    }
}