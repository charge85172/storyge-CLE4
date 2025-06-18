import { ImageSource, Loader } from "excalibur"

const Resources = {
    // Main backgrounds and UI
    Background: new ImageSource('background.png'),
    BoxClosed: new ImageSource('boxclosed.png'),
    BoxOpen: new ImageSource('boxopen.png'),
    ContinueButton: new ImageSource('continuebutton.png'),
    // Plant: new ImageSource('plant.png'),
    Museum: new ImageSource('intro.png'),
    QuestionBook: new ImageSource('questionbook.png'),
    QuitButton: new ImageSource('quitbutton.png'),
    Room: new ImageSource('room.png'),
    SettingsButton: new ImageSource('setting.png'),
    StartButton: new ImageSource('startbutton.png'),

    // Items from public/basic
    Bench: new ImageSource('basic/bench.png'),
    HangedPlant: new ImageSource('basic/hangedplant.png'),
    Lamp: new ImageSource('basic/lamp.png'),
    Pillar: new ImageSource('basic/pilar.png'),
    Plant: new ImageSource('basic/plant.png'),
    Shelf: new ImageSource('basic/shelve.png'),
    Window: new ImageSource('basic/window.png'),

    // Items from public/china
    ChineseFan: new ImageSource('china/chinesefan.png'),
    ChinesePorcelain: new ImageSource('china/chineseporcelain.png'),
    ChineseDragonScroll: new ImageSource('china/dragonscroll.png'),
    ChineseGoldCoin: new ImageSource('china/goldcoin.png'),
    ChineseGoldIngot: new ImageSource('china/goldingot.png'),
    ChineseScroll: new ImageSource('china/scroll.png'),
    ChineseSunWukong: new ImageSource('china/sunwukong.png'),
    ChineseWukongStaff: new ImageSource('china/wukongstaff.png'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }

// code is tot hier gemaakt door charge
