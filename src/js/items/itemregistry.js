import { Bench } from "../items/bench.js";
import { Lamp } from "../items/lamp.js";
import { Pillar } from "../items/pillar.js";
import { HangedPlant } from "../items/hangedPlant.js";
import { Chinesefan } from "../items/chinesefan.js";
import { GoldCoin } from "../items/goldcoin.js";
import { GoldIngot } from "../items/goldingot.js";
import { Scroll } from "../items/scroll.js";
import { ChinesePorcelain } from "../items/chineseporcelain.js";
import { DragonScroll } from "../items/dragonscroll.js";
import { Plant } from "../items/plant.js";
import { Shelf } from "../items/shelf.js";
import { SunWukong } from "../items/sunwukong.js";
import { Window } from "../items/window.js";
import { WukongStaff } from "../items/wukongstaff.js";

// ID 0,1
export const furnitureItem = [
  Bench, Shelf
];

// ID 2,3,4,5,6 
export const item = [
  Plant, Window, HangedPlant, Lamp, Pillar
];

// ID 7,8,9,10,11, 12, 13, 14
export const chineseItem = [
  Chinesefan, DragonScroll, ChinesePorcelain, SunWukong, WukongStaff, GoldCoin, GoldIngot, Scroll
];
