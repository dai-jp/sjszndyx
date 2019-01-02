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
        gold: {
            type: cc.Prefab,
            default: [],
        },
        Score: 0,
        dingAudio:{
            type:cc.AudioClip,
            default:null,
        },
    },

    dingSound() {
        cc.audioEngine.playEffect(this.dingAudio, false);
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        for (let i = 0; i < this.gold.length; i++) {
            if (wi.gold == 2) {
                var go = cc.instantiate(this.gold[0]);
                var go1 = cc.instantiate(this.gold[1]);
                var go2 = cc.instantiate(this.gold[2]);

                this.node.addChild(go);
                this.node.addChild(go1);
                this.node.addChild(go2);
            }
            if (wi.gold == 1) {
                var go = cc.instantiate(this.gold[0]);
                var go1 = cc.instantiate(this.gold[1]);
                this.node.addChild(go);
                this.node.addChild(go1);
            }

        }
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        if (otherCollider.node.name == 'player') {
            this.Score += 1;
            this.dingSound();
            this.node.destroy();
        }
    },

    start() {

    },

    // update (dt) {},
});
