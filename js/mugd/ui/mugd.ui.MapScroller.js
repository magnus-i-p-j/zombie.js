goog.provide('mugd.ui.MapScroller');

goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.style');
goog.require('goog.math.Coordinate');

/**
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 *
 * @param {Element} scrollStarter
 * @param {Element} scrollEnder
 */
mugd.ui.MapScroller = function (scrollStarter, scrollEnder) {
  goog.base(this);
  this.scrollStarter = scrollStarter;
  if (goog.isDef(scrollEnder)) {
    this.scrollContainer = scrollEnder;
  } else {
    this.scrollContainer = scrollStarter;
  }
  /**
   * @type {!goog.events.EventHandler}
   * @protected
   */
  this.handler = new goog.events.EventHandler(this);

  this.handler.listen(this.scrollStarter, goog.events.EventType.MOUSEDOWN, this.mouseDown);
};

goog.inherits(mugd.ui.MapScroller, goog.events.EventTarget);

mugd.ui.MapScroller.prototype.disposeInternal = function () {
  goog.base(this, 'disposeInternal');
  this.handler.dispose();
  this.scrollStarter = null;
};

mugd.ui.MapScroller.prototype.mouseDown = function (e) {
  this.handler.listen(this.scrollStarter, goog.events.EventType.MOUSEMOVE, this.mouseMove);
  this.handler.listen(this.scrollContainer, [goog.events.EventType.MOUSEUP, goog.events.EventType.MOUSEOUT], this.mouseUp);
  this.startMouse = new goog.math.Coordinate(e.offsetX, e.offsetY);
  this.startScroll = new goog.math.Coordinate(this.scrollStarter.scrollLeft, this.scrollStarter.scrollTop);
  e.preventDefault();
};
mugd.ui.MapScroller.prototype.mouseUp = function () {
  this.handler.unlisten(this.scrollContainer, goog.events.EventType.MOUSEMOVE, this.mouseMove);
};
mugd.ui.MapScroller.prototype.mouseMove = function (e) {
  console.log(e.offsetX, e.offsetY);
  var currentPos = new goog.math.Coordinate(e.offsetX, e.offsetY);
  var offset = goog.math.Coordinate.difference(this.startMouse, currentPos);
  var newPos = goog.math.Coordinate.sum(offset, this.startScroll);
  this.scrollStarter.scrollLeft = newPos.x;
  this.scrollStarter.scrollTop = newPos.y;
};


