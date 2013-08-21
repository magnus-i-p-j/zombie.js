TestCase("test z.client.facet.EntityFacet", {
  'setUp': function(){
    var Entity = function () {
      this.meta = {
        description: 'a'
      };
      this.update = function () {
        var event = new z.common.events.EntityModified(this);
        this.dispatchEvent(event);
      }
    };
    goog.inherits(Entity, goog.events.EventTarget);

    this.entity = new Entity();
    this.facet = new z.client.facet.EntityFacet();
  },
  'test Should get description from meta': function () {
    this.facet.setEntity(this.entity);
    assertSame('a', this.facet['description']());
  },
  'test Should listen to entity updated event': function () {
    this.facet.setEntity(this.entity);
    this.entity.meta.description = 'b';
    this.entity.update();
    assertSame('b', this.facet['description']());
  }
});
