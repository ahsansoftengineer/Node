l = console.log;
l('Start')
setTimeout(() => {
  l('2 second pause')
}, 2000)
setTimeout(() => {
  l('0 second pause')
}, 0)
l('End')