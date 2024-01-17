
const AccordionItem = ({ item, index, isOpen, handleClick }) => (
  
    <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={index}>
      <div className="accordion-header" onClick={() => handleClick(index)}>
        <h2>{item.questionName}</h2>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <br />
        <p>{item.statement}</p>
        <p>{item.example}</p>
      </div>
    </div>
  );

  export default AccordionItem;