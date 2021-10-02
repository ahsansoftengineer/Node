## How to Install npm in Project?
#### After Hiting the following
* *npm init*
#### NPM will ask the following question
1. package name: (node) my_project_name
2. version: (1.0.0)
3. description: For Learning Nodejs
4. entry point: (index.js)
5. test command:
6. git repository:[My Repository](https://github.com/ahsansoftengineer/Node.git)
7. keywords:
8. author: Muhammad Ahsan
9. license: (ISC)
10. About to write to D:\2 Node\Node\package.json:
#### Then it will provide the confimation
11. Is this OK? (yes) **yes**
#### Then it will create the following file in your folder
* package.json

## How to create node-modules in as per package.json
> * Curently we didn't have any dependencies install in our project
> * So we don't have node_modules 
#### To install is case sensitive there are many dependencies availaible with same name but different alphabatical case (Validator / validator)
## To Install any dependency use **npm install** command
> * Following Command will create node module folder and install all dependencies for validator in it.
> * Create package-lock.json where the dependencies exsist on the internet
* *npm i validator*