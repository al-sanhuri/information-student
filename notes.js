const fs = require("fs");

const addNote = (id, name, degree, comment) => {
    const notes = loadNotes(); 
    const duplicateTitles = notes.find((note) => {
        return note.id === id;
    });
    console.log(duplicateTitles); 
    if (!duplicateTitles) {
        // console.log(notes)
        let sum =0;
        degree.forEach(degree => {
                sum+=degree;
            })
        notes.push({
            id,
            name,
            degree,
            comment,
            sum,
        });
        saveNotes(notes);
        console.log("Saved Succesffully");
    } else {
        console.log("Error duplicate title");
    }
};
///////////////////////////////////////////////////////////////////////////

// remove notes

const removeNote = (id) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => {
        return note.id !== id
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log("Deleted Sucessfully")
}

///////////////////////////////////////////////////////////////////////////

// read
const readNote = (id) => {
    const notes = loadNotes()
    const note = notes.find((note) => {
        return note.id === id;
    })
    // console.log(note)
    if (note) {
        console.log(note.name)
    }
    else {
        console.log('No note is found')
    }
}
////////////////////////////////////////////////////////////////////////////

// list

const listNote = () => {
    const notes = loadNotes()
    notes.forEach((el) => {
        console.log(el.name, el.sum)
    })
}

///////////////////////////////////////////////////////////////////////////

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json").toString(); // json
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes);
    // console.log(saveData)
    fs.writeFileSync("notes.json", saveData);
};

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
};
