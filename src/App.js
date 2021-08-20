import { BrowserRouter, Route, Switch } from "react-router-dom";
import LIST_PAGE from "./pages/listPage";
import { QUIZ_PAGE } from "./pages/quizPage";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col justify-center items-center p-4 ">
      <BrowserRouter basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path="/">
            <LIST_PAGE />
          </Route>
          <Route exact path="/phap-luat/:id">
            <QUIZ_PAGE />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
