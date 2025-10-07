import React from 'react';

function TodoFilter({ currentFilter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="todo-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          style={{
            fontWeight: currentFilter === filter ? 'bold' : 'normal',
          }}
          className={`filter-button ${currentFilter === filter ? 'active' : ''}`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;