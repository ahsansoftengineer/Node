l = console.log;
l('Application Started');
command = process.argv;
l(command)
command.forEach((cmd) => {
  if (
    cmd === command[0] || cmd === 'D:\\2 Node\\Node\\app.js') l('skipped options');
  else {
    switch (cmd) {
      case '-a':
      case 'add':
      case '-c':
      case 'create':
        l('ADD / CREATE');
        break;
      case '-u':
      case 'update':
      case '-m':
      case 'modified':
        l('UPDATE / MODIFIED');
        break;
      case '-d':
      case 'del':
      case 'delete':
        l('DEL / DELETE');
        break;
      case '-g':
      case 'get':
        l('GET');
        break;
      case '-ga':
      case 'getAll':
        l('GET ALL');
        break;
      default:
        l('Option not defined');
        break;
    }
  }
});
