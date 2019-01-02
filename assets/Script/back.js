// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // gameclearAudio: {
        //     type: cc.AudioClip,
        //     default: null,
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    toScene:function(){
        cc.director.loadScene("start");
    },

    // gameclearSound() {
    //     cc.audioEngine.playEffect(this.gameclearAudio, false);
    // },

    onLoad() {
        // this.gameclear.on('touchstart', function (event) {
        //     this.gameclearSound();
        //     cc.director.loadScene('start');
        // }, this);
    },

    start() {

    },

    // update (dt) {},
});
