goog.provide('mugd.editor.Link');

mugd.editor.Link = function (uri) {
  this._startURI = uri;
  this.uri = ko.computed(this.computeUri, this);
  this.model = ko.observable();
  this.href = ko.observable();
};

mugd.editor.Link.prototype.computeUri = function () {
  if (this.model() && this.href()) {
    // todo; parse href
    if (this.model.value() && this.model.value()['type'].value()) {
      return 'game://terrain/' + this.model.value()['type'].value();
    }
    return '';
  } else {
    return this._startURI;
  }
}
