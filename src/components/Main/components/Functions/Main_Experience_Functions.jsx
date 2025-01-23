  export const calculateGridPosition = (item) => {
    const startRow = item.id;
    const startColm = item.id % 2 === 0 ? 1 : 2;
    const endRow = startRow + 1;
    const endColm = item.id % 2 === 0 ? 2 : 3;
    return {
      gridArea: `${startRow} / ${startColm} / ${endRow} / ${endColm}`,
      animationDelay: `${item.id}s`,
    };
};
  

export const counterPoints = (count) => {
    return (
      <ul className="Pointer_list">
        {Array.from({ length: count + 1 }).map((_, index) => (
          <li className="Point" key={index}></li>
        ))}
      </ul>
    );
  };