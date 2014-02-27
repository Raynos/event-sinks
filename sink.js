module.exports = Sink

function Sink(id, key, write) {
    if (!(this instanceof Sink)) {
        return new Sink(id, key, write)
    }

    this.id = id
    this.key = key
    this.write = write
}
