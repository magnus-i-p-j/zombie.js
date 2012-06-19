TestCase("test generate guid", {
  'test generates guid':function () {
    var actual = z.util.getGuid();

    assertString(actual);
  },
  'test generates different guids':function () {
    var actual1 = z.util.getGuid();
    var actual2 = z.util.getGuid();

    assertNotSame(actual1, actual2);
  }
});
