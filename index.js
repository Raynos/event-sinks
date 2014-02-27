var uuid = require("uuid")
var EventEmitter = require("events").EventEmitter

var Sink = require("./sink.js")

module.exports = EventSinks

function EventSinks(names, opts) {
    opts = opts || {}

    var id = opts.id || uuid()
    var emitter = new EventEmitter()

    var sinks = names.reduce(function (acc, key) {
        acc[key] = new Sink(id, key, broadcaster(key))
        return acc
    }, {})

    emitter.sinks = sinks
    emitter.id = id

    return emitter

    function broadcaster(key) {
        return function (ev) {
            emitter.emit(key, ev)
        }
    }
}
