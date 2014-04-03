module.exports = Sink

function Sink(write, id, key) {
    if (!(this instanceof Sink)) {
        return new Sink(write, id, key)
    }

    this.id = id || ""
    this.key = key || ""
    this.write = write
}
