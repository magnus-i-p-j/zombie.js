goog.provide('mugd.ui.MapScroller');

goog.require('goog.events.EventTarget');
goog.require('goog.events.EventHandler');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('goog.math.Coordinate');

/**
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 *
 * @param {Element} scrollSource
 */
mugd.ui.MapScroller = function (scrollSource, getScrollMover) {
  goog.base(this);
  this.scrollStarter = scrollSource;
  this.getScrollMover = getScrollMover;
  /**
   * @type {!goog.events.EventHandler}
   * @protected
   */
  this.handler = new goog.events.EventHandler(this);

  this.handler.listenOnce(this.init, goog.events.EventType.MOUSEDOWN, this.mouseDown);
};

mugd.ui.MapScroller.prototype.init = function () {
  this.mover = this.getScrollMover();
  if ( this.mover ) {
    this.handler.listen(this.scrollStarter, goog.events.EventType.MOUSEDOWN, this.mouseDown);
    this.handler.listen(this.scrollStarter, [goog.events.EventType.MOUSEUP, goog.events.EventType.MOUSEOUT], this.mouseUp);
  } else {
    this.handler.listenOnce(this.init, goog.events.EventType.MOUSEDOWN, this.mouseDown);
  }
};

goog.inherits(mugd.ui.MapScroller, goog.events.EventTarget);

mugd.ui.MapScroller.prototype.disposeInternal = function () {
  goog.base(this, 'disposeInternal');
  this.handler.dispose();
  this.scrollStarter = null;
};


mugd.ui.MapScroller.prototype.mouseDown = function (e) {
  this.startMouse = this.getMousePos(e);
  this.handler.listen(this.scrollStarter, goog.events.EventType.MOUSEMOVE, this.mouseMove);
  this.startScroll = this.getPos();
  e.preventDefault();
};

mugd.ui.MapScroller.prototype.mouseUp = function () {
  this.handler.unlisten(this.scrollStarter, goog.events.EventType.MOUSEMOVE, this.mouseMove);
};

mugd.ui.MapScroller.prototype.mouseMove = function (e) {
  var currentMouse = this.getMousePos(e);
  var offset = goog.math.Coordinate.difference(currentMouse, this.startMouse );
  var newPos = goog.math.Coordinate.sum(offset, this.startScroll);
  this.setPos(newPos);
};

/**
 * @param {!goog.math.Coordinate} c
 */
mugd.ui.MapScroller.prototype.setPos = function (c) {
  goog.style.setPosition(this.mover, c);
};

/**
 * @return {!goog.math.Coordinate}
 */
mugd.ui.MapScroller.prototype.getPos = function () {
  return goog.style.getPosition(this.mover);
};

mugd.ui.MapScroller.prototype.getMousePos = function (e) {
  return new goog.math.Coordinate(e.clientX, e.clientY);
};