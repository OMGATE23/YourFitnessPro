import { useState } from "react";
import Card from "../Card";




function Pagination({items}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(items.length / itemsPerPage))
    );
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items.slice(firstIndex, lastIndex);

  return (
    <div className="my-8" >
      <div className="flex py-8 flex-wrap justify-center  gap-8">
        {currentItems.map((item) => (
          <Card key={item.name} name={item.name} id = {item.id} gifUrl={item.gifUrl} />
        ))}
      </div>
      <div className="pagination py-6 flex items-center justify-center gap-8">
        <button className="transition-all duration-150 outline outline-1 rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-gray-100 disabled:cursor-not-allowed" disabled={currentPage === 1} onClick={handlePrevClick}>
          Prev
        </button>
        <span>{`Page ${currentPage} of ${Math.ceil(
          items.length / itemsPerPage
        )}`}</span>
        <button className="transition-all duration-150 outline outline-1 rounded-lg px-4 py-2 hover:cursor-pointer hover:bg-gray-100 disabled:cursor-not-allowed"
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;