const fs = require('fs');
const chalk = require('chalk');
l = console.log;
error = chalk.white.bgRed.bold('ERROR ');
errMsg = chalk.red.italic;
success = chalk.white.bgGreen.bold('SUCCESS ');
sucMsg = chalk.green.italic;
const getNotes = function (search) {
  const dataJson = loadNotes();
  if (!search) {
    if (dataJson.length > 0) l(success + sucMsg(' all availaible records'));
    else l(error + errMsg(' no records found'));
    return dataJson;
  } else {
    note = dataJson.find((x) => x.title == search);
    if (note) l(success + sucMsg(' searching records'));
    else l(error + errMsg(' searching not found'));
    return note;
  }
};
const addNotes = function (title, body) {
  const notes = loadNotes();
  note = notes.find((x) => x.title == title);
  if (!note) {
    // Short Hand Syntax if Property Name and Parameter is same.
    notes.push({ title, body });
    saveNotes(notes);
    l(success + sucMsg(title + ' added'));
  } else l(error + errMsg(title + ' already Exsist'));
};
const updateNotes = function (title, body) {
  const notes = loadNotes();
  note = notes.find((x) => x.title == title);
  if (note) {
    note.body = body;
    saveNotes(notes);
    l(success + sucMsg(title + ' updated'));
  } else l(error + errMsg(title + ' not updated'));
};
const deleteNotes = function (title) {
  // pop - Removes from the End of an Array.
  // shift - Removes from the beginning of an Array.
  // splice - removes from a specific Array index.
  // filter - allows you to programatically remove elements from an Array.
  const notes = loadNotes();
  newNotes = notes.filter((x) => x.title != title);
  if (newNotes?.length !== notes.length) {
    saveNotes(newNotes);
    l(success + sucMsg(title + ' deleted'));
  } else l(error + errMsg(title + ' not deleted'));
};
const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    const javaScriptObject = JSON.parse(dataJson);
    return javaScriptObject;
  } catch (error) {
    return [];
  }
};
// Provide the Name as it expose expernally is optional
module.exports = {
  getNotes: getNotes,
  addNotes,
  updateNotes,
  deleteNotes,
};
