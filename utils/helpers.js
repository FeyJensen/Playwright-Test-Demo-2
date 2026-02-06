// Helper functions!

//Gets column selector based on column name
export const getColumnSelector = (columnName) => {
  return `.flex-col.p-4:has-text("${columnName}")`; 
};

// Gets tag selector based on tag name
export const getTagSelector = (tagName) => {
  return  `span.px-2.py-1.rounded-full.text-xs.font-medium:has-text("${tagName}")`; //changed so you wouldn't have to updated the map when new tags are added
};



// Gets task card locator based on task title within a column
export const getTaskCard = (column, title) =>
  column.locator(`div.bg-white.p-4.rounded-lg.shadow-sm.border.border-gray-200:has-text("${title}")`);
