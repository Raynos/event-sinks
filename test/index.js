var test = require("tape")

var EventSinks = require("../index")
var GevalSinks = require("../geval")

test("eventSinks is a function", function (assert) {
    assert.equal(typeof EventSinks, "function")
    assert.equal(typeof GevalSinks, "function")
    assert.end()
})

test("can create sinks and find events", function (assert) {
    var inputs = EventSinks("test", ["foo", "bar"])
    var emitter = inputs.emitter
    var sinks = inputs.sinks
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

test("can create without id", function (assert) {
    var inputs = EventSinks(["foo"])
    var events = []

    inputs.emitter.on("foo", function (ev) {
        events.push(ev)
    })

    inputs.sinks.foo.write("hello")

    assert.deepEqual(events, ["hello"])

    assert.end()
})

test("can create sinks and find geval events", function (assert) {
    var inputs = GevalSinks("test", ["foo", "bar"])
    var events = inputs.events
    var sinks = inputs.sinks
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

test("can create geval without id", function (assert) {
    var inputs = GevalSinks(["foo"])
    var events = []

    inputs.events.foo(function (ev) {
        events.push(ev)
    })

    inputs.sinks.foo.write("hello")

    assert.deepEqual(events, ["hello"])

    assert.end()
})
