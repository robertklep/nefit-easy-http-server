# Nefit Easy™ HTTP server

HTTP server to access Nefit/Bosch XMPP backend over HTTP.

## Installation

```
$ npm i robertklep/nefit-easy-server -g
```

This will install the `easy-server` CLI tool in a well-known "bin/" directory (`npm
config get prefix` will show you where)

## Options

```
$ easy-server -h

easy-server – Nefit Easy™ HTTP-server

Usage:
  easy-server [options]

Options:
  -h --help                   Show this screen
  -v --version                Show version
  -V --verbose                Be more verbose
  -s --serial=SERIAL          Nefit Easy™ serial number
  -a --access-key=ACCESS_KEY  Nefit Easy™ access key
  -p --password=PASSWORD      Nefit Easy™ password
  -P --port=PORT              Port to listen on [default: 3000]
  -H --host=HOST              Host to bind to [default: 127.0.0.1]

Instead of specifying serial number, access key or password through
options, you can also define them through environment variables:

  NEFIT_SERIAL_NUMBER
  NEFIT_ACCESS_KEY
  NEFIT_PASSWORD
```
