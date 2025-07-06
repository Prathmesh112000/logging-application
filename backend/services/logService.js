export const filterLogs = (logs, query) => {
  let filtered = logs;

  // Filter by log level
  if (query.level) {
    filtered = filtered.filter(log => log.level === query.level);
  }

  // Full-text search in the message
  if (query.message) {
    filtered = filtered.filter(log =>
      log.message.toLowerCase().includes(query.message.toLowerCase())
    );
  }

  // Filter by resourceId
  if (query.resourceId) {
    filtered = filtered.filter(log => log.resourceId === query.resourceId);
  }

  // Filter by timestamp range
  if (query.timestamp_start) {
    filtered = filtered.filter(
      log => new Date(log.timestamp) >= new Date(query.timestamp_start)
    );
  }

  if (query.timestamp_end) {
    filtered = filtered.filter(
      log => new Date(log.timestamp) <= new Date(query.timestamp_end)
    );
  }

  // Additional filters as per schema
  if (query.traceId) {
    filtered = filtered.filter(log => log.traceId === query.traceId);
  }

  if (query.spanId) {
    filtered = filtered.filter(log => log.spanId === query.spanId);
  }

  if (query.commit) {
    filtered = filtered.filter(log => log.commit === query.commit);
  }

  // Sort reverse chronological
  filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return filtered;
};

export const clearLogs = async () => {
  const res = await fetch("http://localhost:4000/logs", { method: "DELETE" });
  return res.json();
};