
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from 'react-error-boundary'

// Pages
import { ErrorFallback } from '../src/pages/ErrorFallback'
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { PDP } from "./pages/PDP";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile";


function App() {

  const [isAuthenticated, setAuthenticated] = useState(true)

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pdp" element={<PDP />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {isAuthenticated && <PrivateRoutes />}
      </ErrorBoundary>
    </BrowserRouter>
  );
}

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
    </Routes>)
}

export default App;
