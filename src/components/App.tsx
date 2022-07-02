import { obstacleData } from "data/data";
import { createContext } from "react";
import { store } from "state/store";
import { Provider } from "react-redux";
import MainPage from "./mainpage/MainPage";

export const ObstacleContext = createContext(obstacleData);

const App = () => (
  <Provider store={store}>
    <ObstacleContext.Provider value={obstacleData}>
      <MainPage />
    </ObstacleContext.Provider>
  </Provider>
);

export default App;
