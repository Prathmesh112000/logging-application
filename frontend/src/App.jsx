
// // // // import { useState } from "react";
// // // // import FilterBar from "./components/FilterBar";
// // // // import LogList from "./components/LogList";
// // // // import { useLogs } from "./hooks/useLogs";
// // // // import { useSocket } from "./hooks/useSocket";

// // // // export default function App() {
// // // //   const [filters, setFilters] = useState({});
// // // //   const { logs, loading } = useLogs(filters);
// // // //   const [liveLogs, setLiveLogs] = useState([]);

// // // //   useSocket((log) => {
// // // //     // push new live logs to the top
// // // //     setLiveLogs((prev) => [log, ...prev]);
// // // //   });

// // // //   // combine:
// // // //   // 1) live logs (from websocket)
// // // //   // 2) filtered logs (from query)
// // // //   // note: you could also only show live logs if you want
// // // //   const combinedLogs = [...liveLogs, ...logs];

// // // //   return (
// // // //     <div>
// // // //       <h1>Log Ingestion System</h1>
// // // //       <FilterBar onFilterChange={setFilters} />
// // // //       {loading ? <p>Loading...</p> : <LogList logs={combinedLogs} />}
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import FilterBar from "./components/FilterBar";
// // // import LogList from "./components/LogList";
// // // import { useLogs } from "./hooks/useLogs";
// // // import { useSocket } from "./hooks/useSocket";

// // // export default function App() {
// // //   const [filters, setFilters] = useState({});
// // //   const { logs, loading } = useLogs(filters);
// // //   const [liveLogs, setLiveLogs] = useState([]);

// // //   useSocket((log) => {
// // //     setLiveLogs((prev) => [log, ...prev]);
// // //   }, filters);

// // //   // merge websocket logs with filtered logs
// // //   const combinedLogs = [...liveLogs, ...logs];

// // //   return (
// // //     <div>
// // //       <h1>Log Ingestion System</h1>
// // //       <FilterBar onFilterChange={setFilters} />
// // //       {loading ? <p>Loading...</p> : <LogList logs={combinedLogs} />}
// // //     </div>
// // //   );
// // // }

// // import { useState } from "react";
// // import FilterBar from "./components/FilterBar";
// // import LogList from "./components/LogList";
// // import { useLogs } from "./hooks/useLogs";
// // import { useSocket } from "./hooks/useSocket";

// // export default function App() {
// //   const [filters, setFilters] = useState({});
// //   const { logs, loading } = useLogs(filters);
// //   const [liveLogs, setLiveLogs] = useState([]);

// //   useSocket((log) => {
// //     setLiveLogs((prev) => [log, ...prev]);
// //   }, filters);

// //   // merge websocket logs with filtered logs
// //   const combinedLogs = [...liveLogs, ...logs];

// //   return (
// //     <div>
// //       <h1>Log Ingestion System</h1>
// //       <FilterBar onFilterChange={setFilters} />
// //       {loading ? <p>Loading...</p> : <LogList logs={combinedLogs} />}
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import FilterBar from "./components/FilterBar";
// import LogList from "./components/LogList";
// import { useLogs } from "./hooks/useLogs";
// import { useSocket } from "./hooks/useSocket";
// import { Container, Typography, Box } from "@mui/material";

// export default function App() {
//   const [filters, setFilters] = useState({});
//   const { logs, loading } = useLogs(filters);
//   const [liveLogs, setLiveLogs] = useState([]);

//   useSocket((log) => {
//     setLiveLogs((prev) => [log, ...prev]);
//   }, filters);

//   const combinedLogs = [...liveLogs, ...logs];

//   return (
//     <Container sx={{ py: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Log Ingestion System
//       </Typography>
//       <FilterBar onFilterChange={setFilters} />

//       {loading ? (
//         <Typography>Loading...</Typography>
//       ) : (
//         <Box
//           sx={{
//             mt: 2,
//             maxHeight: "600px", // adjust as you wish
//             overflowY: "auto",
//             border: "1px solid #ddd",
//             borderRadius: 1,
//             p: 2,
//             backgroundColor: "#f9f9f9"
//           }}
//         >
//           <LogList logs={combinedLogs} />
//         </Box>
//       )}
//     </Container>
//   );
// }
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import LogList from "./components/LogList";
import DetailsModal from "./components/DetailsModal";
import { useLogs } from "./hooks/useLogs";
import { useSocket } from "./hooks/useSocket";
import { Container, Typography, Box, Button } from "@mui/material";
// import { clearLogs } from "../../backend/services/logService";
import Dashboard from "./components/DashBoard";
import { clearLogs } from "./services/logApi";

export default function App() {
  const [filters, setFilters] = useState({});
  const { logs, loading } = useLogs(filters);
  const [liveLogs, setLiveLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);

  useSocket((log) => {
    setLiveLogs((prev) => [log, ...prev]);
  }, filters);

    useEffect(() => {
    setLiveLogs([]);
  }, [filters]);

  const combinedLogs = [...liveLogs, ...logs];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Log Ingestion System
      </Typography>
      <Box sx={{ mb: 2 }}>
      <Button
        variant="contained"
        color="error"
        onClick={async () => {
          if (window.confirm("Are you sure you want to permanently delete all logs?")) {
            await clearLogs();
            window.location.reload();
          }
        }}
      >
        Clear All Logs
      </Button>
    </Box>
      <FilterBar onFilterChange={setFilters} />
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box
          sx={{
            mt: 2,
            maxHeight: "600px",
            overflowY: "auto",
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 2,
            backgroundColor: "#f9f9f9"
          }}
        >
            <Dashboard logs={combinedLogs} />
          <LogList logs={combinedLogs} onLogClick={setSelectedLog} />
        </Box>
      )}

      <DetailsModal
        open={!!selectedLog}
        onClose={() => setSelectedLog(null)}
        log={selectedLog}
      />
    </Container>
  );
}
