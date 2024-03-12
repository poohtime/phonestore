import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer.tsx";
import { Main } from "./pages/main/main.tsx";
import { Auth } from "./pages/auth/auth.tsx";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
            <Footer />
        </React.Fragment>
    );
}

export default App;
