import { NativeBaseProvider, Box } from "native-base";
import Home from "./assets/pages/Home";
import Example from "./assets/pages/Example";

export default function App() {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
}


