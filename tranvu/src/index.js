import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BookForm from "./AddBookForm/AddBookForm";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BookForm>
      <App></App>
    </BookForm>
  </StrictMode>

);
