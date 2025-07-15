import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./src/store"
import AppNavigator from "./src/navigation/AppNavigator"
import { SafeAreaProvider } from "react-native-safe-area-context"
import "./src/i18n/i18next"

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
