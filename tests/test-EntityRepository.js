TestCase("test EntityRepository", {
  'setUp':function () {
    var injector = new mugd.injector.Injector();
    injector.addFactory("mocking", this.mockEntity);
    injector.addProvider(z.common.Resources.RULEBOOK, this.mockRulebook);
    this.repo = injector.Compose(z.common.EntityRepository).New();
  },
  'mockEntity':function(){
  },
  'mockRulebook': function(){
    this.getMetaClass = function(type){
      return {
        "category": "mocking",
        "type": "mockEntity",
        "name": "mock",
        "description": "mock stuff"
      }
    };
  },
  'test get entity by guid':function () {
    var mockEntityData = {
      guid:'1234',
      type:'mockEntity'
    };
    var mockEntity = this.repo.put(mockEntityData);
    var actual = this.repo.get(mockEntityData.guid);
    assertSame(mockEntity, actual);
  },
  'test get entity that does not exist':function () {

    var actual = this.repo.get('1234');

    assertNull(actual);
  },
  'test removing entity works':function () {
    var mockEntityData = {
      guid:'1234',
      type:'mockEntity'
    };
    var mockEntity = this.repo.put(mockEntityData);
    this.repo.remove(mockEntityData.guid);
    var actual = this.repo.get(mockEntityData.guid);

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
    var mockEntityData = {
      guid:'1234',
      type:'mockEntity'
    };
    var mockEntity = this.repo.put(mockEntityData);
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
    var mockEntityData1 = {
      guid:'1234',
      type:'mockEntity'
    };
    var mockEntity1 = this.repo.put(mockEntityData1);
    mockEntity1.include = true;

    var mockEntityData2 = {
      guid:'5678',
      type:'mockEntity'
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
  }
});
