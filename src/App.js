import { BrowserRouter, Route, Switch } from "react-router-dom";
import QUIZ_PAGE from "./features/quiz/quizPage";
import LIST_PAGE from "./features/section/listPage";

const App = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 text-gray-300 bg-gray-900">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <LIST_PAGE />
          </Route>
          <Route exact path="/quiz/:sectionIndex/:quizIndex">
            <QUIZ_PAGE />
          </Route>
          <Route>Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
