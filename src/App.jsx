import { useState } from "react";
import "./App.css";

const initialColumns = {
  todo: { id: "todo", title: "To Do", cardIds: ["1", "2"] },
  inProgress: { id: "inProgress", title: "In Progress", cardIds: [] },
  done: { id: "done", title: "Done", cardIds: [] },
};

const initialCards = {
  1: { id: "1", text: "Learn useState" },
  2: { id: "2", text: "Learn useEffect" },
};

function App() {
  const [columns, setColumns] = useState(initialColumns);
  const [cards, setCards] = useState(initialCards);
  return (
  <div className="flex gap-4 p-6 bg-gray-100 min-h-screen">
    {Object.values(columns).map(column => (
      <div key={column.id} className="bg-gray-200 rounded-lg p-3 w-64 flex flex-col gap-2">
        <h2 className="font-semibold text-gray-700 mb-2">{column.title}</h2>
        {column.cardIds.map(cardId => (
          <div key={cardId} className="bg-white rounded-md shadow p-3 text-sm text-gray-800">
            {cards[cardId].text}
          </div>
        ))}
      </div>
    ))}
  </div>
);
}

export default App;
