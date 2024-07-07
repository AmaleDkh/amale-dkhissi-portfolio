function TechnologyItem({ technologies }) {
  return (
    <div className="technologies-list__category__item">
      {technologies.map((technology, technologyIndex) => (
        <div key={technologyIndex}>
          <i className={`${technology.icon} ${technology.size}`}></i>
        </div>
      ))}
    </div>
  );
}

export default TechnologyItem;
