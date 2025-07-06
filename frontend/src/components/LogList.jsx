// import LogItem from "./LogItem";

// export default function LogList({ logs }) {
//   return (
//     <div>
//       {logs.length === 0 ? <p>No logs found</p> : logs.map(log => <LogItem key={log.traceId} log={log} />)}
//     </div>
//   );
// }
import LogItem from "./LogItem";

export default function LogList({ logs, onLogClick }) {
  return (
    <>
      {logs.length === 0
        ? <p>No logs found</p>
        : logs.map(log => (
          <LogItem key={log.traceId} log={log} onClick={onLogClick} />
        ))}
    </>
  );
}
