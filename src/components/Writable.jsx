import { useState } from "react";
import { useDrag } from "react-dnd";
function Writable(id) {
  const [write, setWrite] = useState("");
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <input
      ref={drag}
      className="w-2 h-2 bg-black"
      value={write}
      onChange={(e) => setWrite(e.target.value)}
      style={{ border: isDragging ? "5px solid pink" : "10px" }}
    />
  );
}

export default Writable;
