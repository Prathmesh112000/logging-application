// // export default function LogItem({ log }) {
// //   const levelColors = {
// //     error: "border-l-4 border-red-500",
// //     warn: "border-l-4 border-yellow-500",
// //     info: "border-l-4 border-blue-500",
// //     debug: "border-l-4 border-gray-500",
// //   };
// //   return (
// //     <div className={`p-2 mb-2 ${levelColors[log.level]}`}>
// //       <strong>{log.level.toUpperCase()}</strong> - {log.timestamp}
// //       <div>{log.message}</div>
// //       <small>resourceId: {log.resourceId}</small>
// //     </div>
// //   );
// // }
// import { Card, CardContent, Typography, Chip } from "@mui/material";

// export default function LogItem({ log }) {
//   const levelColor = {
//     error: "error",
//     warn: "warning",
//     info: "info",
//     debug: "default"
//   };

//   return (
//     <Card
//       variant="outlined"
//       sx={{
//         borderLeft: 4,
//         borderColor: `${levelColor[log.level]}.main`,
//         mb: 2,
//       }}
//     >
//       <CardContent>
//         <Typography variant="subtitle2" color="text.secondary">
//           {log.timestamp} - <Chip label={log.level.toUpperCase()} color={levelColor[log.level]} size="small" />
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 1 }}>
//           {log.message}
//         </Typography>
//         <Typography variant="caption" color="text.secondary">
//           Resource ID: {log.resourceId}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function LogItem({ log, onClick }) {
  const levelColor = {
    error: "error",
    warn: "warning",
    info: "info",
    debug: "default"
  };

  return (
    <Card
      variant="outlined"
      sx={{
        borderLeft: 4,
        borderColor: `${levelColor[log.level]}.main`,
        mb: 2,
        cursor: "pointer"
      }}
      onClick={() => onClick(log)}
    >
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {log.timestamp} - <Chip label={log.level.toUpperCase()} color={levelColor[log.level]} size="small" />
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {log.message}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Resource ID: {log.resourceId}
        </Typography>
      </CardContent>
    </Card>
  );
}
