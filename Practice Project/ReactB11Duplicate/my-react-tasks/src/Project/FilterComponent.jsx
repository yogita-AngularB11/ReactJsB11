import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FilterComponent.css'; // Ensure you have the necessary styles imported

const FilterComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedDueDate, setSelectedDueDate] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(`Category selected: ${category}`);
  };

  const handlePrioritySelect = (priority) => {
    setSelectedPriority(priority);
    console.log(`Priority selected: ${priority}`);
  };

  const handleDueDateSelect = (dueDate) => {
    setSelectedDueDate(dueDate);
    console.log(`Due Date selected: ${dueDate}`);
  };

  return (
    <div className="filter-container">
      <DropdownButton
        id="dropdown-category"
        title={selectedCategory ? `Category: ${selectedCategory}` : 'Select Category'}
        variant="secondary"
      >
        <Dropdown.Item onClick={() => handleCategorySelect('Work')}>
          Work
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Personal')}>
          Personal
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-priority"
        title={selectedPriority ? `Priority: ${selectedPriority}` : 'Select Priority'}
        variant="secondary"
      >
        <Dropdown.Item onClick={() => handlePrioritySelect('Low')}>
          Low
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handlePrioritySelect('Medium')}>
          Medium
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handlePrioritySelect('High')}>
          High
        </Dropdown.Item>
      </DropdownButton>

      <Form.Select
        id="dropdown-due-date"
        onChange={(e) => handleDueDateSelect(e.target.value)}
        value={selectedDueDate || ''}
      >
        <option value="">Select Due Date</option>
        <option value="today">Today</option>
        <option value="thisWeek">This Week</option>
        <option value="thisMonth">This Month</option>
      </Form.Select>

      <Button variant="primary" className="mt-2">
        Apply Filter
      </Button>
    </div>
  );
};

export default FilterComponent;
