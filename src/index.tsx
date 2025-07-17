import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LicenseInfo } from "@mui/x-license";

LicenseInfo.setLicenseKey("");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
