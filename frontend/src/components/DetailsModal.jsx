import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Chip
} from "@mui/material";

export default function DetailsModal({ open, onClose, log }) {
  if (!log) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Log Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chip label={log.level.toUpperCase()} color={
              log.level === 'error' ? 'error' :
              log.level === 'warn' ? 'warning' :
              log.level === 'info' ? 'info' :
              'default'
            } />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Timestamp:</Typography>
            <Typography>{log.timestamp}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Message:</Typography>
            <Typography>{log.message}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Resource ID:</Typography>
            <Typography>{log.resourceId}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Trace ID:</Typography>
            <Typography>{log.traceId}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Span ID:</Typography>
            <Typography>{log.spanId}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Commit:</Typography>
            <Typography>{log.commit}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Metadata:</Typography>
            <pre style={{
              background: "#f5f5f5",
              padding: "8px",
              borderRadius: "4px",
              overflowX: "auto"
            }}>
              {JSON.stringify(log.metadata, null, 2)}
            </pre>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
