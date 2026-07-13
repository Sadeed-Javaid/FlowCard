import { useDraggable } from '@dnd-kit/core';

function Card({ id, text, accent }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    borderLeftColor: accent,
    ...(transform && { transform: `translate(${transform.x}px, ${transform.y}px)` }),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-paper border-l-4 rounded-md shadow-sm p-3 text-sm text-ink font-body cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
    >
      {text}
    </div>
  );
}

export default Card;