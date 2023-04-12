import React, { useState, useEffect } from 'react';

const PlanEditForm = ({ plan, onSubmit }) => {
  const [name, setName] = useState(plan.name || '');
  const [startDate, setStartDate] = useState(plan.start || '');
  const [endDate, setEndDate] = useState(plan.end || '');
  const [rating, setRating] = useState(plan.rating || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      start: startDate,
      end: endDate,
      rating
    });
  };

  useEffect(() => {
    setName(plan.name);
    setStartDate(plan.start);
    setEndDate(plan.end);
    setRating(plan.rating);
  }, [plan]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit">Update Plan</button>
    </form>
  );
};

export default PlanEditForm;
