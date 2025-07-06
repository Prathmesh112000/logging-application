// import { useState, useEffect } from "react";
// import { fetchLogs } from "../services/logApi";

// export const useLogs = (filters) => {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getLogs = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchLogs(filters);
//         setLogs(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getLogs();
//   }, [filters]);

//   return { logs, loading };
// };
import { useState, useEffect } from "react";
import { fetchLogs } from "../services/logApi";

export const useLogs = (filters) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLogs = async () => {
      setLoading(true);
      try {
        const data = await fetchLogs(filters);
        setLogs(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getLogs();
  }, [filters]);

  return { logs, loading };
};
