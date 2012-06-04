var z = z || {};
z.util = z.util || {};
z.util.test = z.util.test || {};

z.util.test.testInterface = function(namespace, interfaceTest, classes){
    var classes = classes || namespace;
    for (var cls in classes) {
        if (classes.hasOwnProperty(cls)) {
            interfaceTest(namespace, classes[c]);
        }
    }
};