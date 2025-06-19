import { Label, ScreenElement, Vector, Font, Color, TextAlign, Actor } from "excalibur";
// import { Chinesefan } from "./items/chinesefan";
// import { ChinesePorcelain } from "./items/chineseporcelain";
// import { DragonScroll } from "./items/dragonscroll";
// import { GoldCoin } from "./items/goldcoin";
// import { GoldIngot } from "./items/goldingot";
// import { Scroll } from "./items/scroll";
// import { SunWukong } from "./items/sunwukong";
// import { WukongStaff } from "./items/wukongstaff";

export class UI extends Actor {

    testLabel;

    onInitialize(engine) {
        console.log("UI initialized");
        
        this.testLabel = new Label({
            text: "test",
            pos: new Vector(100, 50),
            font: new Font({
                size: 30,
                family: 'Open Sans',
                color: Color.White,
                textAlign: TextAlign.Right
            })
        });
        this.addChild(this.testLabel);
        console.log(this.testLabel);


    };
}