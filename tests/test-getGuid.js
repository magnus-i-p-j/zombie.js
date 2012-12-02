TestCase("test generate guid", {
  'test generates guid':function () {
    var actual = mugd.utils.getGuid();

    assertString(actual);
  },
  'test generates different guids':function () {
    var actual1 = mugd.utils.getGuid();
    var actual2 = mugd.utils.getGuid();

    assertNotSame(actual1, actual2);
  }
});
