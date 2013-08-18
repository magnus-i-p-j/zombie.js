var proto = {
  'setUp': function () {
    var injector = new mugd.injector.Injector();
    injector.addFactory("mocking", this.mockEntity);
    injector.addProvider(z.common.Resources.RULEBOOK, this.mockRulebook);
    this.repo = injector.Compose(z.common.EntityRepository).New();
    this.entityData = {
      guid: '1234',
      type: 'mockEntity'
    };
  },
  'mockRulebook': function () {
    this.getMetaClass = function (type) {
      return {
        "category": "mocking",
        "type": "mockEntity",
        "name": "mock",
        "description": "mock stuff"
      }
    };
  },
  'test should dispatch an entity modified event': function () {
    var mockEntity = this.repo.put(this.entityData);

    var receivedEntity = false;
    /**
     * @param {!z.common.events.EntityModified} event
     */
    var listener = function (event) {
      receivedEntity = event.entity;
    };
    goog.events.listen(mockEntity, z.common.events.EventType.ENTITY_MODIFIED, listener);

    this.repo.put(this.entityData);

    assertSame(mockEntity, receivedEntity);
  }
};

proto['mockEntity'] = function () {
  this.updates = 0;
  this._update = function () {
    this.updates += 1;
    return true;
  }
};
goog.inherits(proto['mockEntity'], z.common.entities.Entity);


TestCase("test z.common.entities.Entity", proto);
