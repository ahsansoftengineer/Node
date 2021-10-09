## How to Debugg Node Application?
### Node Debugg Options
> * Chrome DevTools 55+
> * Option 1: **Open chrome://inspect** in a Chromium-based browser or edge://inspect in 
> * Option 2: Copy the **devtoolsFrontendUrl** from the output of /json/list (see above) or the --inspect hint text and paste into Chrome.
> * **Note** that the Node.js and the Chrome need to be run on the same platform.
> * Visual Studio Code 1.10+
> * In the Debug panel, click the settings icon to open .vscode/launch.json. Select "Node.js" for initial setup.
### Node and Chrome using V8 Engine that is why to debugg we use Chorme for Debugging
### Node Debugg procedure
##### Add debugger in your code 
```javascript
const ahsan = 'Ahsan'
const rock = 'Rock'
const funcs = function() {
  return this.ahsan + this.rock
}
debugger
l('utilizing debugger')
```
##### Run the following command in the terminal
> * *node inspect app.js*
> * *node inspect --port=8080 script.js*
> * *node --inspect=[127.0.0.1:9229]* is **unknown**
> * *ssh -L 9221:localhost:9229 user@remote.example.com* is **unknown**
> * Go to following URL *chrome://inspect/*
> * Add the Workspace Directory in the Chrome DevTool
##### Run the following command in Chrome Debugger Tool
```javascript
task.js:26 
(2) [{…}, {…}]
task.tasks.getTasksToDo()[0]
{text: 'Clean yard', completed: false}
task.tasks.getTasksToDo()[1]
{text: 'Film course', completed: false}
task.tasks.tasks
(3) [{…}, {…}, {…}]
task.tasks.tasks[0]
{text: 'Grocery shopping', completed: true}
```
![Chrome_Dev_Tools](../images/Chrome DevTool.PNG?raw=true)
