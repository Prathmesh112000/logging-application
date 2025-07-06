// export const matchesFilters = (log, filters) => {
//   // if level filter is active
//   if (filters.level && log.level !== filters.level) {
//     return false;
//   }

//   if (filters.message && !log.message.toLowerCase().includes(filters.message.toLowerCase())) {
//     return false;
//   }

//   if (filters.resourceId && log.resourceId !== filters.resourceId) {
//     return false;
//   }

//   if (filters.timestamp_start && new Date(log.timestamp) < new Date(filters.timestamp_start)) {
//     return false;
//   }

//   if (filters.timestamp_end && new Date(log.timestamp) > new Date(filters.timestamp_end)) {
//     return false;
//   }

//   return true; // passed all filters
// };


export const matchesFilters = (log, filters) => {
  if (filters.level && log.level !== filters.level) {
    return false;
  }
  if (filters.message && !log.message.toLowerCase().includes(filters.message.toLowerCase())) {
    return false;
  }
  if (filters.resourceId && log.resourceId !== filters.resourceId) {
    return false;
  }
  if (filters.timestamp_start && new Date(log.timestamp) < new Date(filters.timestamp_start)) {
    return false;
  }
  if (filters.timestamp_end && new Date(log.timestamp) > new Date(filters.timestamp_end)) {
    return false;
  }
  return true;
};
