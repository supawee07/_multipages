import Add from "../Add/Add";
import Temperatures from "../Temperatures/Temperatures";
import Timer from "../Timer/Timer";
import Counter from "../Counter/Counter";

import "./component.css";
function Component() {
  return (
    <div className="background-container">
      <div className="component-container">
        <h1 className="title_work">Components</h1>
        <div className="lineOf_CAT">
          <div className="counter">
            <Counter name={""} value={0} />
            <Timer />
          </div>
          <div className="forAdd">
            <Add aValue={0} bValue={0} />
          </div>
        </div>
        <Temperatures />
      </div>
      
    </div>
  );
}

export default Component;
