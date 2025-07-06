// import { useState, useEffect } from "react";

// export default function FilterBar({ onFilterChange }) {
//   const [message, setMessage] = useState("");
//   const [level, setLevel] = useState("");
//   const [resourceId, setResourceId] = useState("");
//   const [timestampStart, setTimestampStart] = useState("");
//   const [timestampEnd, setTimestampEnd] = useState("");

//   // debounce filter changes
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       onFilterChange({
//         message,
//         level,
//         resourceId,
//         timestamp_start: timestampStart,
//         timestamp_end: timestampEnd,
//       });
//     }, 500); // 500ms debounce
//     return () => clearTimeout(timeout);
//   }, [message, level, resourceId, timestampStart, timestampEnd, onFilterChange]);

//   return (
//     <div className="filter-bar">
//       <input
//         placeholder="Search message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <select value={level} onChange={(e) => setLevel(e.target.value)}>
//         <option value="">All Levels</option>
//         <option value="error">Error</option>
//         <option value="warn">Warn</option>
//         <option value="info">Info</option>
//         <option value="debug">Debug</option>
//       </select>
//       <input
//         placeholder="Resource ID"
//         value={resourceId}
//         onChange={(e) => setResourceId(e.target.value)}
//       />
//       <input
//         type="datetime-local"
//         value={timestampStart}
//         onChange={(e) => setTimestampStart(e.target.value)}
//       />
//       <input
//         type="datetime-local"
//         value={timestampEnd}
//         onChange={(e) => setTimestampEnd(e.target.value)}
//       />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Grid,
  Paper
} from "@mui/material";

export default function FilterBar({ onFilterChange }) {
  const [message, setMessage] = useState("");
  const [level, setLevel] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [timestampStart, setTimestampStart] = useState("");
  const [timestampEnd, setTimestampEnd] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange({
        message,
        level,
        resourceId,
        timestamp_start: timestampStart,
        timestamp_end: timestampEnd,
      });
    }, 500);
    return () => clearTimeout(timeout);
  }, [message, level, resourceId, timestampStart, timestampEnd, onFilterChange]);

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Search Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12} sm={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Log Level</InputLabel>
            <Select
              value={level}
              label="Log Level"
              onChange={(e) => setLevel(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="error">Error</MenuItem>
              <MenuItem value="warn">Warn</MenuItem>
              <MenuItem value="info">Info</MenuItem>
              <MenuItem value="debug">Debug</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        {/* <Grid item xs={12} sm={3}>
  <FormControl
    size="small"
    fullWidth
    sx={{ minWidth: 150 }}
  >
    <InputLabel id="log-level-label">Log Level</InputLabel>
    <Select
      labelId="log-level-label"
      value={level}
      label="Log Level"
      onChange={(e) => setLevel(e.target.value)}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="error">Error</MenuItem>
      <MenuItem value="warn">Warn</MenuItem>
      <MenuItem value="info">Info</MenuItem>
      <MenuItem value="debug">Debug</MenuItem>
    </Select>
  </FormControl>
</Grid> */}
<Grid item xs={12} sm={3}>
  <FormControl
    size="small"
    fullWidth
    sx={{ minWidth: 150 }}
  >
    <InputLabel id="log-level-label">Log Level</InputLabel>
    <Select
      labelId="log-level-label"
      value={level}
      label="Log Level"
      onChange={(e) => setLevel(e.target.value)}
    >
      <MenuItem value="">
        All
      </MenuItem>
      <MenuItem value="error">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "error.main"
          }}
        >
          ● Error
        </Box>
      </MenuItem>
      <MenuItem value="warn">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "warning.main"
          }}
        >
          ● Warn
        </Box>
      </MenuItem>
      <MenuItem value="info">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "info.main"
          }}
        >
          ● Info
        </Box>
      </MenuItem>
      <MenuItem value="debug">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "grey.700"
          }}
        >
          ● Debug
        </Box>
      </MenuItem>
    </Select>
  </FormControl>
</Grid>


        <Grid item xs={12} sm={2}>
          <TextField
            label="Resource ID"
            value={resourceId}
            onChange={(e) => setResourceId(e.target.value)}
            fullWidth
            size="small"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="Start Time"
            type="datetime-local"
            value={timestampStart}
            onChange={(e) => setTimestampStart(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            label="End Time"
            type="datetime-local"
            value={timestampEnd}
            onChange={(e) => setTimestampEnd(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
