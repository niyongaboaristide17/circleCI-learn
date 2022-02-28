mocha-tcov-reporter
========================

This reporter is a simple code coverage reporter.  
Will display the results in a list.

[![npm version](https://badge.fury.io/js/mocha-tcov-reporter.svg)](http://badge.fury.io/js/mocha-tcov-reporter)
[![Build Status](https://travis-ci.org/holyshared/mocha-tcov-reporter.svg?branch=upgrade_modules)](https://travis-ci.org/holyshared/mocha-tcov-reporter)
[![Coverage Status](https://coveralls.io/repos/holyshared/mocha-tcov-reporter/badge.svg?branch=master)](https://coveralls.io/r/holyshared/mocha-tcov-reporter?branch=master)
[![Code Climate](https://codeclimate.com/github/holyshared/mocha-tcov-reporter/badges/gpa.svg)](https://codeclimate.com/github/holyshared/mocha-tcov-reporter)
[![Dependency Status](https://david-dm.org/holyshared/mocha-tcov-reporter.svg)](https://david-dm.org/holyshared/mocha-tcov-reporter)![mocha-tcov-reporter](https://raw.githubusercontent.com/holyshared/mocha-tcov-reporter/master/screen.png "mocha-tcov-reporter")

Installation
------------------------------------------

	npm install mocha-tcov-reporter --save-dev

Basic Usage
------------------------------------------

Add a set of [blanket](https://github.com/alex-seville/blanket) to package.json.

```json
"config": {
  "blanket": {
    "pattern": "/lib/",
    "data-cover-never": "/node_modules/"
  }
}
```

After that, You need to specify the reporter.  

	mocha -r blanket -R mocha-tcov-reporter test


Multi Reporter
------------------------------------------

With [mocha-multi](https://github.com/glenjamin/mocha-multi), you can view the report along with the test results.  
In the example below, we have used in conjunction with the spec reporter.

	multi='spec=- mocha-tcov-reporter=-' mocha -r blanket -R mocha-multi test
