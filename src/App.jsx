import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Route>
      </Routes>
    </DarkModeProvider>
  );
}

export default App;
