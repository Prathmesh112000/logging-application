// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
// import { Paper, Typography } from "@mui/material";

// export default function Dashboard({ logs }) {
//   // count logs by level
//   const levels = ["error", "warn", "info", "debug"];
//   const data = levels.map((level) => ({
//     level,
//     count: logs.filter((log) => log.level === level).length,
//   }));

//   return (
//     <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
//       <Typography variant="h6" gutterBottom>
//         Logs Overview
//       </Typography>
//       <ResponsiveContainer width="100%" height={250}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="level" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="count" fill="#1976d2" />
//         </BarChart>
//       </ResponsiveContainer>
//     </Paper>
//   );
// }

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";

export default function Dashboard({ logs }) {
  // count logs by level
  const levels = ["error", "warn", "info", "debug"];
  const data = levels.map((level) => ({
    name: level.toUpperCase(),
    value: logs.filter((log) => log.level === level).length,
  }));

  const COLORS = {
    error: "#d32f2f",
    warn: "#ed6c02",
    info: "#0288d1",
    debug: "#6c757d"
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Logs by Level
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={
                  COLORS[entry.name.toLowerCase()] || "#8884d8"
                }
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}

