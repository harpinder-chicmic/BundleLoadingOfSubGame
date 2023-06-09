// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScript2 extends cc.Component {
  @property(cc.ProgressBar)
  progressBar: cc.ProgressBar = null;
  @property(cc.Node)
  target1: cc.Node = null;

  private _bundle: cc.AssetManager.Bundle;
  start() {
    this.progressBar.progress = 0;
    this.target1.active = false;
    this.onClickLoad();
  }
  onClickLoad() {
    const options = {
      version: "08f26",
      onFileProgress: (n, t) => {
        this.progressBar.progress = n / t;
      },
    };
    cc.assetManager.loadBundle("http://127.0.0.1:8887/Game1", options, (err, bundle) => {
      console.log(err, bundle);

      if (!err) {
        this._bundle = bundle;
        this.target1.active = true;
      }
    });
  }
  onClickSceneTo(e: cc.Event.EventTouch) {
    // cc.director.loadScene('Game1');
    e.currentTarget.active = false;
    this._bundle.load("prefab/Game1Stage", cc.Prefab, (err, asset: cc.Prefab) => {
      if (!err) {
        this.target1.addChild(cc.instantiate(asset));
      }
    });
  }
  // update (dt) {}
}
