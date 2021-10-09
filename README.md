### Why asynchronous programming?
> In computer programming, asynchronous operation means that a process operates independently of other processes, whereas synchronous operation means that the process runs only as a result of some other process being completed or handed off.
### How does asynchronous code behavious?
> The Programm execuation doesn't stop for asynchronous task even for 0 seconds to complete and continue execuation the synchronous task 
```javascript
l = console.log;
l('Start')
setTimeout(() => {
  l('2 second pause')
}, 2000)
setTimeout(() => {
  l('0 second pause')
}, 0)
l('End')
```
#### Result of the Above Code
> * Start
> * End
> * 0 second pause
> * 2 second pause