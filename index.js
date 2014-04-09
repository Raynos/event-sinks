var EventEmitter = require("events").EventEmitter
var cuid = require("cuid")

module.exports = EventSinks

function EventSinks(id, names) {
    if (Array.isArray(id)) {
        names = id
        id = cuid()
    }

    var emitter = new EventEmitter()

    var sinks = names.reduce(function (acc, key) {
        acc[key] = new Sink(id, key, emitter)
        return acc
    }, {})

    return { emitter: emitter, sinks: sinks }
}

function Sink(id, key, emitter) {
    this.id = id
    this.key = key
    this.emitter = emitter
}

Sink.prototype.write = function write(ev) {
    this.emitter.emit(this.key, ev)
}
