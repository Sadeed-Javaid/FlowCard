import { useDroppable } from '@dnd-kit/core';
import Card from './Card';

function Column({ id, title, cardIds, cards }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="bg-gray-200 rounded-lg p-3 w-64 flex flex-col gap-2">
      <h2 className="font-semibold text-gray-700 mb-2">{title}</h2>
      {cardIds.map(cardId => (
        <Card key={cardId} id={cardId} text={cards[cardId].text} />
      ))}
    </div>
  );
}

export default Column;