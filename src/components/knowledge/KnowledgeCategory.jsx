function KnowledgeCategory({ setCategory }) {
  const handlecategory = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div className="my-5">
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="ALL"
        value="ALL"
      >
        ALL
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="CPU/MB/RAM"
        value="CPU/MB/RAM"
      >
        CPU/메인보드/램
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="VGA"
        value="VGA"
      >
        그래픽카드
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="CASE"
        value="CASE"
      >
        케이스
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="SSD/HDD/USB"
        value="SSD/HDD/USB"
      >
        SSD/HDD/USB
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="COOLER"
        value="COOLER"
      >
        공랭/수랭쿨러
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="POWER"
        value="POWER"
      >
        파워서플라이
      </button>
      <button
        className="mr-5 hover:text-indigo-800 hover:font-bold"
        onClick={handlecategory}
        name="KEYBOARD/MOUSE"
        value="KEYBOARD/MOUSE"
      >
        키보드/마우스
      </button>
    </div>
  );
}

export default KnowledgeCategory;
