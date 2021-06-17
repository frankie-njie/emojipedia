import React from "react";
import Entry from "../components/Entry";
import emojipedia from "../emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      desc={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>

    </div>
  );
}

export default App;
