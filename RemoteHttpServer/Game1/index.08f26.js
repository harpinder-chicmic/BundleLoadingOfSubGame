window.__require=function t(e,r,o){function n(i,u){if(!r[i]){if(!e[i]){var p=i.split("/");if(p=p[p.length-1],!e[p]){var f="function"==typeof __require&&__require;if(!u&&f)return f(p,!0);if(c)return c(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var a=r[i]={exports:{}};e[i][0].call(a.exports,function(t){return n(e[i][1][t]||t)},a,a.exports,t,e,r,o)}return r[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<o.length;i++)n(o[i]);return n}({Game1Logic:[function(t,e,r){"use strict";cc._RF.push(e,"b1d841H7t5HK4wD+3eEQUtO","Game1Logic");var o,n=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=this&&this.__decorate||function(t,e,r,o){var n,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,o);else for(var u=t.length-1;u>=0;u--)(n=t[u])&&(i=(c<3?n(i):c>3?n(e,r,i):n(e,r))||i);return c>3&&i&&Object.defineProperty(e,r,i),i};Object.defineProperty(r,"__esModule",{value:!0});var i=cc._decorator,u=i.ccclass,p=i.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.background=null,e.actor=null,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.background.x-=100*t,this.background.x<=-1280&&(this.background.x=-256)},e.prototype.onClickSceneBack=function(){cc.director.loadScene("Main2")},c([p(cc.Node)],e.prototype,"background",void 0),c([p(cc.Node)],e.prototype,"actor",void 0),c([u],e)}(cc.Component);r.default=f,cc._RF.pop()},{}]},{},["Game1Logic"]);