var EventEmitter = require("events").EventEmitter
var cuid = require("cuid")

var Sink = require("./sink")

module.exports = EventSinks

function EventSinks(id, names) {
    if (Array.isArray(id)) {
        names = id
        id = cuid()
    }

    var emitter = new EventEmitter()

    var sinks = names.reduce(function (acc, key) {
        acc[key] = new Sink(emitter.emit.bind(emitter, key), id, key)
        return acc
    }, {})

    return { emitter: emitter, sinks: sinks }
}
