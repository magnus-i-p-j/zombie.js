var z = z || {};
z.util = z.util || {};

z.util.Event = function (topic, source, data) {
    this.topic = topic;
    this.source = source || null;
    this.data = data || {};
};
