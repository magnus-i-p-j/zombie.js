TestCase("test EntityRepository", {
  'setUp':function () {
    this.repo = new z.common.EntityRepository();
  },
  'test exists':function () {
    assertFunction(z.common.EntityRepository);
  },
  'test get entity by guid':function () {
    var mockEntity = {
      guid:'1234'
    };
    this.repo.put(mockEntity);

    var actual = this.repo.get(mockEntity.guid);

    assertSame(actual, mockEntity);
  },
  'test get entity that does not exist':function () {

    var actual = this.repo.get('1234');

    assertNull(actual);
  },
  'test deleting entity works':function () {
    var mockEntity = {
      guid:'1234'
    };
    this.repo.put(mockEntity);

    this.repo.delete(mockEntity.guid);
    var actual = this.repo.get(mockEntity.guid);

    assertNull(actual);
  },
  'test map does nothing with no entities':function () {
    var somethingDone = false;

    function action() {
      somethingDone = true;
    }

    var actual = this.repo.map(action);

    assertEquals([], actual);
    assertFalse(somethingDone);
  },
  'test map applies function to all elements':function () {
    var mockEntity = {
      guid:'1234'
    };
    this.repo.put(mockEntity);
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
  'test map does not apply function to filtered elements':function () {
    var mockEntity1 = {
      guid:'1234',
      include:true
    };
    var mockEntity2 = {
      guid:'5678',
      include:false
    };
    this.repo.put(mockEntity1);
    this.repo.put(mockEntity2);
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
  }
});
