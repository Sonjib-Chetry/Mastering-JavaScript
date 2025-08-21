const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (value === "") {
    // If value is an empty string, delete the given prop property
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // If prop isn't "tracks" and value isn't empty, assign value
    records[id][prop] = value;
  } else {
    // If prop is "tracks" and value isn't empty
    if (!records[id].hasOwnProperty("tracks")) {
      // Create an empty array if tracks doesn't exist
      records[id]["tracks"] = [];
    }
    // Add value to the end of the album's tracks array
    records[id]["tracks"].push(value);
  }
  return records;
}
