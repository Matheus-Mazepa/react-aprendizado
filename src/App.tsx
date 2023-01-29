import { AppRoutes } from "./Routes"
import { AppProvider } from "./context";

function App() {

  return (
    <AppProvider>
       <AppRoutes />
    </AppProvider>
  )
}

export default App
