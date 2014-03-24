type Event := require('geval').Event

type Sink := {
    id: String,
    key: String,
    write: (Any) => void
}

event-sinks := (id: String, names: Array<String>) 
    => {
        emitter: EventEmitter<String, Any>,
        sinks: Object<String, Sink>
    }

event-sinks/geval := (id: String, names: Array<String>) 
    =>  {
        events: Object<String, Event>,
        sinks: Object<String, Sink>
    }
