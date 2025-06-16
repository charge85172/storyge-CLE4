import { ImageSource, Loader } from "excalibur"
import { Pillar } from "./items/props/prop classes/pillar"

const Resources = {
    Background: new ImageSource('background.png'),
    Museum: new ImageSource('intro.png'),
    Quit: new ImageSource('quitbutton.png'),
    Start: new ImageSource('startbutton.png'),
    BoxClosed: new ImageSource('boxclosed.png'),
    BoxOpen: new ImageSource('boxopen.png'),
    Plant: new ImageSource('plant.png'),
    Room1: new ImageSource('room1.png'),
    Room2: new ImageSource('room2.png'),
    Lamp: new ImageSource('lamp.png'),
    Pillar: new ImageSource('pillar.png'),
    Shelf: new ImageSource('shelf.png'),
    Window: new ImageSource('window.png'),
    ChineseFan: new ImageSource('chinesefan.png'),
    ChinesePorcelain: new ImageSource('chineseporcelain.png'),
    DragonScroll: new ImageSource('dragonscroll.png'),
    GoldCoin: new ImageSource('goldcoin.png'),
    GoldIngot: new ImageSource('goldingot.png'),
    Scroll: new ImageSource('scroll.png'),
    SunWukong: new ImageSource('sunwukong.png'),
    WukongStaff: new ImageSource('wukongstaff.png'),
    QuestionBook: new ImageSource('questionbook.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }

// code is tot hier gemaakt door charge
