// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var wi = require('window');
cc.Class({
    extends: cc.Component,

    properties: {
        begin: {
            type: cc.Node,
            default: null,
        },

        bgmAudio: {
            type: cc.AudioClip,
            default: null,
        },
    },

    // toScene: function () {
    //     cc.director.loadScene("LV1")
    // },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.bgmSound();
        this.begin.on('touchstart', function (event) {
            
            cc.director.loadScene('LV1');
            wi.gold = 2;
        }, this);

        

        

    },

    bgmSound() {
        cc.audioEngine.playMusic(this.bgmAudio, false);
    },

    start() {

    },

    // update (dt) {},
});
