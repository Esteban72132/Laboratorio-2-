import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Figuras from "./figuras";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Figuras />
    </React.StrictMode>
);