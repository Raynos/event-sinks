module.exports = Sink

function Sink(write, id, key) {
    if (!(this instanceof Sink)) {
        return new Sink(id, key, write)
    }

    this.id = id || ""
    this.key = key || ""
    this.write = write
}
