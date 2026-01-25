import { SELECTORS } from './selectors.js';

// Helper functions!

//Gets column selector based on column name
export const getColumnSelector = (columnName) => {
  const columnMap = {
    'To Do': SELECTORS.todoColumn,
    'In Progress': SELECTORS.inProgressColumn,
    'Done': SELECTORS.doneColumn
  };
  return columnMap[columnName];
};

// Gets tag selector based on tag name
export const getTagSelector = (tagName) => {
  const tagMap = {
    'Feature': SELECTORS.featureTag,
    'High Priority': SELECTORS.highPriorityTag,
    'Bug': SELECTORS.bugTag,
    'Design': SELECTORS.designTag
  };
  return tagMap[tagName];
};

// Gets task card locator based on task title within a column
export const getTaskCard = (column, title) =>
  column.locator(`div.bg-white.p-4.rounded-lg.shadow-sm.border.border-gray-200:has-text("${title}")`);
