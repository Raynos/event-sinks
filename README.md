# event-sinks

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

create a set of sinks for events

This allows you to create an event emitter, and pass a set of sinks
  to someone else. Somebody else can invoke your sinks and send
  values to your event emitter.

This allows you to write decoupled interfaces.

## Example

```js
var uuid = require("uuid")
var EventSinks = require("event-sinks")

var emitter = EventSinks(uuid(), ["foo", "bar"])
var sinks = emitter.sinks

emitter.on('foo', function (ev) {
  console.log('foo', ev)
})
emitter.on('bar', function (ev) {
  console.log('bar', ev)
})

sinks.foo.write('hello')
sinks.bar.write('bar')
```

## Example geval

```js
var EventSinks = require("event-sinks/geval")
var uuid = require("uuid")

var events = EventSinks(uuid(), ["foo", "bar"])
var sinks = emitter.sinks

events.foo(function (ev) {
  console.log('foo', ev)
})
events.bar(function (ev) {
  console.log('bar', ev)
})

sinks.foo.write('hello')
sinks.bar.write('bar')
```


## Installation

`npm install event-sinks`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/event-sinks.png
  [2]: https://travis-ci.org/Raynos/event-sinks
  [3]: https://badge.fury.io/js/event-sinks.png
  [4]: https://badge.fury.io/js/event-sinks
  [5]: https://coveralls.io/repos/Raynos/event-sinks/badge.png
  [6]: https://coveralls.io/r/Raynos/event-sinks
  [7]: https://gemnasium.com/Raynos/event-sinks.png
  [8]: https://gemnasium.com/Raynos/event-sinks
  [9]: https://david-dm.org/Raynos/event-sinks.png
  [10]: https://david-dm.org/Raynos/event-sinks
  [11]: https://ci.testling.com/Raynos/event-sinks.png
  [12]: https://ci.testling.com/Raynos/event-sinks
