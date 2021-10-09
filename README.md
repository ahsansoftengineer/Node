## What is yargs?
* Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface. Yargs gives you: commands and (grouped) options (like module run -n --force), ... bash-completion shortcuts for commands and options, and much more.
* Yargs module is used for creating your own command-line commands in node. js and helps in generating an elegant user interface. This module makes command-line arguments flexible and easy to use.
## How to install Yargs?
* *npm i yargs*
## What is the difference between *process.args & yargs.args*
* The first one is a function that returns an array containing the arguments given to the current running Node process. The second one is a library for building command line interfaces.
#### Yargs provide you object and process.args provide you array so you don't have to worry about where user put the object instead you use object property

* *process.args[2]* don't know what user provide
* *yargs.args.anyProperty* if anyProperty provided in the CLI then process something.
## How to Customize Yargs Version?
### *yargs.version(1.0.0)*
## Yargs Result
### Command
* *node app.js -title="Here is my title" -d -c="c value" -u update="Something Else"  Hey Hangon for a second*
Result of Yargs
```javascript
{
  _: [ 'Hey', 'Hangon', 'for', 'a', 'second' ],
  t: [ true, true ],
  i: true,
  l: true,
  e: 'Here is my title',
  d: true,
  c: 'c value',
  u: 'update=Something Else',
  '$0': 'app.js'
}
```