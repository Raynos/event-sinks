type Event := require('geval').Event

type Sink := {
    id: String,
    key: String,
    write: (Any) => void
}

event-sinks := (names: Array<String>, opts?: {
    id: String
}) => EventEmitter<String, Any> & {
    sinks: Object<String, Sink>,
    id: String
}

event-sinks/geval := (names: Array<String>, opts?: {
    id: String
}) => Object<String, Event> & {
    sinks: Object<String, Sink>,
    id: String
}
