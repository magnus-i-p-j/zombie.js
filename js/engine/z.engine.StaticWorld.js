goog.provide('z.engine.StaticWorld');

z.engine.StaticWorld = function (source, top, left) {
  this.source = source;
  this.top = top;
  this.left = left;
};

z.engine.StaticWorld.prototype.getData = function () {
  var data = [];
  var self = this;
  var c = this.left;
  var r = this.top;
  this.source.split('').each(function (item) {
    var dataitem;
    if (item === '\n') {
      r += 1;
      c = self.left;
    } else {
      dataitem = self.parseSourceItem(item);
      dataitem.c = c;
      dataitem.r = r;
      data.push(dataitem);
      c += 1;
    }
  });
  return data;
};

z.engine.StaticWorld.prototype.parseSourceItem = function (item) {
  var terrain = this.terrainLookup[item];
  if (!terrain) {
    terrain = 'unknown';
  }
  return { terrain:terrain };
};

z.engine.StaticWorld.prototype.terrainLookup = {
  g:'grass',
  w:'water'
};