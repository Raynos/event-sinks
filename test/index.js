var test = require("tape")

var EventSinks = require("../index")
var GevalSinks = require("../geval")

test("eventSinks is a function", function (assert) {
    assert.equal(typeof EventSinks, "function")
    assert.equal(typeof GevalSinks, "function")
    assert.end()
})

test("can create sinks and find events", function (assert) {
    var emitter = EventSinks("test", ["foo", "bar"])
    var sinks = emitter.sinks
    var events = []

    emitter.on("foo", function (ev) {
        events.push(["foo", ev])
    })
    emitter.on("bar", function (ev) {
        events.push(["bar", ev])
    })

    sinks.foo.write("hello")
    sinks.bar.write("world")

    assert.deepEqual(events[0], ["foo", "hello"])
    assert.deepEqual(events[1], ["bar", "world"])

    assert.end()
})

test("can create sinks and find geval events", function (assert) {
    var events = GevalSinks("test", ["foo", "bar"])
    var sinks = events.sinks
    var messages = []

    events.foo(function (ev) {
        messages.push(["foo", ev])
    })
    events.bar(function (ev) {
        messages.push(["bar", ev])
    })

    sinks.foo.write("hello")
    sinks.bar.write("world")

    assert.deepEqual(messages[0], ["foo", "hello"])
    assert.deepEqual(messages[1], ["bar", "world"])

    assert.end()
})
