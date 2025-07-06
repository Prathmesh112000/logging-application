// import { useEffect } from "react";
// import { io } from "socket.io-client";

// export const useSocket = (onNewLog) => {
//   useEffect(() => {
//     const socket = io("http://localhost:4000");

//     socket.on("connect", () => {
//       console.log("Connected to websocket server");
//     });

//     socket.on("newLog", (log) => {
//       console.log("New log received via websocket", log);
//       onNewLog(log);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [onNewLog]);
// };
import { useEffect } from "react";
import { io } from "socket.io-client";
import { matchesFilters } from "../utils/filterMatch";

export const useSocket = (onNewLog, activeFilters) => {
  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("connect", () => {
      console.log("Connected to websocket server");
    });

    socket.on("newLog", (log) => {
      console.log("New log received via websocket", log);

      if (matchesFilters(log, activeFilters)) {
        onNewLog(log);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [onNewLog, activeFilters]);
};
