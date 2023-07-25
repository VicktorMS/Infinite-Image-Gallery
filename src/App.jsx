import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  );
};

export default App;
