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
        //移动方向，0=不移动，1=左，2=右，3=上，4=下
        dir: 0,

        moveSpeedX: 0,
        moveSpeedY: 0,

        gold: {
            type: cc.Node,
            default: null,
        },

        attackAudio: {
            type: cc.AudioClip,
            default: null,
        },
        dingAudio: {
            type: cc.AudioClip,
            default: null,
        },
        nextAudio: {
            type: cc.AudioClip,
            default: null,
        },
        gameclearAudio: {
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:
    keyDown(event) {
        var rb = this.getComponent(cc.RigidBody);

        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.dir = 1;
                break;
            case cc.macro.KEY.right:
                this.dir = 2;
                break;
            case cc.macro.KEY.up:
                this.dir = 3;
                break;
            case cc.macro.KEY.down:
                this.dir = 4;
                break;
        }
    },

    keyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.dir = 0;
                break;
            case cc.macro.KEY.right:
                this.dir = 0;
                break;
            case cc.macro.KEY.up:
                this.dir = 0;
                break;
            case cc.macro.KEY.down:
                this.dir = 0;
                break;
        }
    },

    onLoad() {
        //物理碰撞开启
        cc.director.getPhysicsManager().enabled = true;

        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;

        //this.goldScripts = this.gold.getComponent("gold");



        //初始化键盘监听
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUp, this);
    },

    attackSound() {
        cc.audioEngine.playEffect(this.attackAudio, false);
    },
    dingSound() {
        cc.audioEngine.playEffect(this.dingAudio, false);
    },
    nextSound() {
        cc.audioEngine.playEffect(this.nextAudio, false);
    },
    gameclearSound() {
        cc.audioEngine.playEffect(this.gameclearAudio, false);
    },

    onBeginContact(contact, selfCollider, otherCollider) {
        switch (otherCollider.node.name) {
            case 'lv1bb01':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv1bb02':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv1bb03':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv1bb04':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv1bb05':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv1bb06':
                this.attackSound();
                cc.director.loadScene('LV1');
                break;
            case 'lv2bb01':
                this.attackSound();
                cc.director.loadScene('LV2');
                break;
            case 'lv2bb02':
                this.attackSound();
                cc.director.loadScene('LV2');
                break;
            case 'lv2bb03':
                this.attackSound();
                cc.director.loadScene('LV2');
                break;
            case 'lv2bb04':
                this.attackSound();
                cc.director.loadScene('LV2');
                break;
            case 'tolv2':
                this.nextSound();
                cc.director.loadScene('LV2');
                wi.gold = 1;
                break;
            case 'end':
                this.gameclearSound();
                cc.director.loadScene('GameOver');
                break;
        }
    },


    start() {

    },

    update(dt) {
        if (this.dir == 1) {
            this.node.x -= this.moveSpeedX * dt;
        }
        if (this.dir == 2) {
            this.node.x += this.moveSpeedX * dt;
        }
        if (this.dir == 3) {
            this.node.y += this.moveSpeedY * dt;
        }
        if (this.dir == 4) {
            this.node.y -= this.moveSpeedY * dt;
        }
    },
});
