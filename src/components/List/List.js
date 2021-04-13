import "../List/List.css";

function List({
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  firstParameter,
	secondtParameter,
	thirdParameter,
	fourthParameter,
	fifthParameter
}) {
  return (
    <div className="list__container">
      <ul className="list">
        <li className="list__text list__text_item list__text_pale">
          {firstItem}
        </li>
        <li className="list__text list__text_item list__text_pale">
          {secondItem}
        </li>
        <li className="list__text list__text_item list__text_pale">
          {thirdItem}
        </li>
        <li className="list__text list__text_item list__text_pale">
          {fourthItem}
        </li>
        <li className="list__text list__text_item list__text_pale">
          {fifthItem}
        </li>
      </ul>
      <ul className="list">
        <li className="list__text list__text_item">{firstParameter}</li>
        <li className="list__text list__text_item">{secondtParameter}</li>
        <li className="list__text list__text_item">{thirdParameter}</li>
        <li className="list__text list__text_item">{fourthParameter}</li>
        <li className="list__text list__text_item">{fifthParameter}</li>
      </ul>
    </div>
  );
}

export default List;
