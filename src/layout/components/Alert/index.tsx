import MuiAlert, { AlertColor } from "@mui/material/Alert";
function Alert({ msg, severity }: { msg: string; severity: AlertColor }) {
  return (
    <MuiAlert
      sx={{ position: "absolute", right: "0.5rem", top: 0 }}
      severity={severity}
    >
      {msg}
    </MuiAlert>
  );
}

export default Alert;
