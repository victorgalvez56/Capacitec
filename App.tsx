import { NativeBaseProvider, Box } from "native-base";
import Home from "./assets/pages/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}


