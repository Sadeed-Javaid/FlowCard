import { useState } from "react";
import Column from "./components/Column"
import { DndContext } from '@dnd-kit/core';
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

  const [newCardText, setNewCardText] = useState("");


  function handleDragEnd(event) {
  const { active, over } = event;

  if (!over) return; // dropped outside any valid column

  const cardId = active.id;
  const targetColumnId = over.id;

  // Step 1: find which column currently holds this card
  const sourceColumn = Object.values(columns).find(col =>
    col.cardIds.includes(cardId)
  );

  if (!sourceColumn || sourceColumn.id === targetColumnId) return; // no-op

  // Step 2 + 3: remove from source, add to target
  setColumns({
    ...columns,
    [sourceColumn.id]: {
      ...sourceColumn,
      cardIds: sourceColumn.cardIds.filter(id => id !== cardId),
    },
    [targetColumnId]: {
      ...columns[targetColumnId],
      cardIds: [...columns[targetColumnId].cardIds, cardId],
    },
  });
}




  function handleAddCard(){
    if(newCardText.trim() === '') retunr ;

    const id = String(Date.now());
    const newCard = {id,text:newCardText};

    setCards({ ...cards, [id]: newCard })

    setColumns({
      ...columns,
      todo: {
        ...columns.todo,cardIds: [ ...columns.todo.cardIds, id],
      },
    });

    setNewCardText('');
  }

  return (
    <div>
      <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 flex-col p-6 bg-red-500 min-h-screen">
        
        <div className="flex flex-col gap-4 max-w-[800px] " > 

          <div className="bg-gray-200 rounded-lg p-3 flex flex-col gap-2" >

          <input 
          value={newCardText}
          onChange={e=>setNewCardText(e.target.value)}
          placeholder="Add New Task ......"
          type="text" 
          className="border rounded-lg px-2 py-1 text-sm"
          />

          <button onClick={handleAddCard} className="bg-blue-500 w-[200px] text-white text-sm rounded-lg py-1 hover:bg-blue-600" >Add Card</button>

        </div>

        <div className="flex gap-4 " >
          {Object.values(columns).map((column) => (
            <Column
            id={column.id}
            key={column.id}
            title={column.title}
            cardIds={column.cardIds}
            cards={cards}
            />
          ))}
        </div>
        </div>

      </div>
      </DndContext>
    </div>
  );
}

export default App;
