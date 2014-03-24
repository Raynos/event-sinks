var GevalEvent = require("geval/event")

var Sink = require("./sink.js")

module.exports = EventSinks

function EventSinks(id, names) {
    var events = names.reduce(function(acc, key) {
        acc[key] = GevalEvent()
        return acc
    }, {})

    var sources = names.reduce(function (acc, key) {
        acc[key] = events[key].listen
        return acc
    }, {})

    var sinks = names.reduce(function (acc, key) {
        acc[key] = new Sink(events[key].broadcast, id, key)
        return acc
    }, {})

    return { events: sources, sinks: sinks }
}
