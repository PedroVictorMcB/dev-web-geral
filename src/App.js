import React, { useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
    useEffect(() => {
        document.title = "CodeCademy";
    }, []);

    return (
        <div className="App">
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
