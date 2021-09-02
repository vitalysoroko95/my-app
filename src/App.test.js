
import SocialNetworkApp from "./App";
import * as ReactDOM from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialNetworkApp />, div);
  ReactDOM.unmountComponentAtNode(div)
});
