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
  'test get entity by guid': function () {
    var mockEntity = this.repo.put(this.entityData);
    var actual = this.repo.get(this.entityData.guid);
    assertSame(mockEntity, actual);
  },
  'test get entity that does not exist': function () {

    var actual = this.repo.get('1234');

    assertNull(actual);
  },
  'test removing entity works': function () {
    var mockEntity = this.repo.put(this.entityData);
    this.repo.remove(this.entityData.guid);
    var actual = this.repo.get(this.entityData.guid);

    assertNull(actual);
  },
  'test map does nothing with no entities': function () {
    var somethingDone = false;

    function action() {
      somethingDone = true;
    }

    var actual = this.repo.map(action);

    assertEquals([], actual);
    assertFalse(somethingDone);
  },
  'test map applies function to all elements': function () {
    var mockEntity = this.repo.put(this.entityData);
    var items = 0;

    function action(entity) {
      if (entity === mockEntity) {
        items += 1;
        return true;
      }
      return false;
    }

    var actual = this.repo.map(action);

    assertEquals([true], actual);
    assertEquals(1, items);
  },
  'test map does not apply function to filtered elements': function () {
    var mockEntity1 = this.repo.put(this.entityData);
    mockEntity1.include = true;

    var mockEntityData2 = {
      guid: '5678',
      type: 'mockEntity'
    };
    var mockEntity2 = this.repo.put(mockEntityData2);
    mockEntity2.include = false;

    var items = 0;

    function action(entity) {
      items += 1;
      if (entity === mockEntity1) {
        return true;
      }
      return false;
    }

    function filter(entity) {
      return entity.include;
    }

    var actual = this.repo.map(action, filter);

    assertEquals([true], actual);
    assertEquals(1, items);
  },
  "test should dispatches entity created event when creating entities": function () {
    var receivedEntity = false;
    /**
     * @param {!z.common.events.EntityCreated} event
     */
    var listener = function (event) {
      receivedEntity = event.entity;
    };
    goog.events.listen(this.repo, z.common.events.EventType.ENTITY_CREATED, listener);

    var mockEntity = this.repo.put(this.entityData);

    assertSame(mockEntity, receivedEntity);
  },
  "test should dispatches entity modified event when updating entities": function () {
    var mockEntity = this.repo.put(this.entityData);

    var receivedEntity = false;
    /**
     * @param {!z.common.events.EntityModified} event
     */
    var listener = function (event) {
      receivedEntity = event.entity;
    };
    goog.events.listen(this.repo, z.common.events.EventType.ENTITY_MODIFIED, listener);

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


TestCase("test EntityRepository", proto);
