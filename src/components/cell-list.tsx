import "./cell-list.css";
import { Fragment, useState } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { sendData } from "../connector/sendData";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  const [isPublic, setIsPublic] = useState(false);

  const toggleVisibility = () => {
    setIsPublic(!isPublic);
  };

  function saveSnippet() {
    console.log("Save snippet", cells);
    sendData(cells);
  }

  return (
    <div className="CodeWrapper">
      <button onClick={saveSnippet}>Save snippet</button>
      <button onClick={toggleVisibility}>
        {isPublic ? "Make Private" : "Make Public"}
      </button>

      <div className="cell-list">
        <AddCell forceVisible={cells.length === 0} previousCellId={null} />
        {renderedCells}
      </div>
    </div>
  );
};

export default CellList;
