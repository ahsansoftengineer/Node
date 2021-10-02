# Learn Node
## What is Node.js?
> 1. Node.js is free and open source server environment
> 2. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
> 3. Node.js uses JavaScript on the server
## A common task for a web server can be to open a file on the server and return the content to the client.
### Here is how PHP or ASP handles a file request:
> 1. Sends the task to the computer's file system.
> 2. Waits while the file system opens and reads the file.
> 3. Returns the content to the client.
> 4. Ready to handle the next request.
### Here is how Node.js handles a file request:
> 1. Sends the task to the computer's file system. 
> 2. Ready to handle the next request.
> 3. When the file system has opened and read the file, the server returns the content to the client. 
#### Node.js eliminates the waiting, and simply continues with the next request.
#### Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

## What Can Node.js Do?
> 1. Node.js can generate dynamic page content
> 2. Node.js can create, open, read, write, delete, and close files on the server
> 3. Node.js can collect form data
> 4. Node.js can add, delete, modify data in your database

## Node Installation
# Learn Node
## How to install Node?
> 1. Go to the following URL and download the Node
> 2. Link .[NODE] (https://nodejs.org/en/download/)
> 3. Follow the on screen instruction to install

## After Installation use the following command in the terminal
> *node -v*
> *npm -v*