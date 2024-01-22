import "@/styles/globals.css";
import { QuestionProvider } from "@/context/ScoreContext";

export default function App({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Component {...pageProps} />
    </QuestionProvider>
  );
}
