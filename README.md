# Nefit Easy™ HTTP server

HTTP server to access Nefit/Bosch XMPP backend over HTTP.

## Installation

_This library requires Node.js 4.0.0 or later!_

```
$ npm i nefit-easy-http-server -g
```

This will install the `easy-server` CLI tool in a well-known "bin/" directory (`npm config get prefix` will show you where).

## Usage

### Starting

```
$ easy-server
```

By default, the server will be accessible through `http://127.0.0.1:3000/`

### Configuration

Configuration is done through command line options. See _Options_ below.

### Examples

The server isn't meant to be opened in a browser. Its intended use is to be called using tools like `curl` or `httpie`, or from other programs/scripts, through HTTP calls. The following examples will use `curl`.

The HTTP server provides two actions:

* retrieving an [endpoint](https://github.com/robertklep/nefit-easy-core/wiki/List-of-endpoints);
* writing data to an endpoint;

To retrieve an endpoint (for example, `/ecus/rrc/uiStatus`):
```
$ curl http://127.0.0.1:3000/bridge/ecus/rrc/uiStatus
```

To write data to an endpoint:
```
$ curl -XPOST http://127.0.0.1:3000/bridge/heatingCircuits/hc1/temperatureRoomManual -d '{"value":20}' -H 'Content-Type: application/json'
```

For `POST` requests, the data should be a [valid JSON string](http://jsonlint.com/). There is no input validation.

## Options

```
$ easy-server -h

easy-server – Nefit Easy™ HTTP-server

Usage:
  easy-server [options]

Options:
  -h --help                Show this screen
  -v --version             Show version
  -V --verbose             Be more verbose
  --serial=SERIAL          Nefit Easy™ serial number
  --access-key=ACCESS_KEY  Nefit Easy™ access key
  --password=PASSWORD      Nefit Easy™ password
  --port=PORT              Port to listen on [default: 3000]
  --host=HOST              Host to bind to [default: 127.0.0.1]
  --timeout=TIMEOUT        Request timeout in seconds [default: 30]

Instead of specifying serial number, access key or password through
options, you can also define them through environment variables:

  NEFIT_SERIAL_NUMBER
  NEFIT_ACCESS_KEY
  NEFIT_PASSWORD
```
