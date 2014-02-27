var GevalEvent = require("geval/event")
var uuid = require("uuid")

var Sink = require("./sink.js")

module.exports = EventSinks

function EventSinks(names, opts) {
    opts = opts || {}

    var id = opts.id || uuid()

    var events = names.reduce(function(acc, key) {
        acc[key] = GevalEvent()
        return acc
    }, {})

    var sources = names.reduce(function (acc, key) {
        acc[key] = events[key].listen
        return acc
    }, {})

    var sinks = names.reduce(function (acc, key) {
        acc[key] = new Sink(id, key, events[key].broadcast)
        return acc
    }, {})

    sources.sinks = sinks
    sources.id = id

    return sources
}
