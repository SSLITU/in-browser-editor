import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";

// Todo:
// - Make git repository for the whole project
// - Create records in db from the app
// - Create User Form
// - Authentication against the server
// - Create navigation new snippet, my snippets, dashboard.
// - Revise snippet functionality
// - List of snippets
// - Dashboard
// - Language toggler
// - Share snippet

const App = () => {
  let Authentication = true;

  return (
    <Provider store={store}>
      <h1 className="Header">Snippet Base</h1>
      {!Authentication && (
        <div>
          <button>Sign Up</button>
        </div>
      )}
      {Authentication && <CellList />}
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
