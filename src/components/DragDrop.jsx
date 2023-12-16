import { useState } from "react";
import Writable from "./Writable";
import { useDrop } from "react-dnd";
function DragDrop() {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addImageToBoard = (id) => {
    let newArray = board?.push(<Writable />);
    setBoard(newArray);
  };
  return (
    <>
      <div>
        <Writable />
      </div>
      <div
        ref={drop}
        style={{ width: "1000px", backgroundColor: "red", height: "600px" }}
      >
        DRPDA
      </div>
    </>
  );
}

export default DragDrop;
