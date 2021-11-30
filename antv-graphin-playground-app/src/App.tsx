import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Example1 } from "./apps/example1/Example1";
import { Example2 } from "./apps/example2/Example2";
import { Example3 } from "./apps/example3/Example3";
import { Example4 } from "./apps/example4/Example4";
import { Example5 } from "./apps/example5/Example5";
import { Example6 } from "./apps/example6/Example6";
import { Example7 } from "./apps/example7/Example7";

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <Link to="/example1">Example 1</Link>
        </div>
        <div>
          <Link to="/example2">Example 2</Link>
        </div>
        <div>
          <Link to="/example3">Example 3</Link>
        </div>
        <div>
          <Link to="/example4">Example 4</Link>
        </div>
        <div>
          <Link to="/example5">Example 5</Link>
        </div>
        <div>
          <Link to="/example6">Example 6</Link>
        </div>
        <div>
          <Link to="/example7">Example 7</Link>
        </div>

        <Routes>
          <Route path="example1" element={<Example1 />} />
          <Route path="example2" element={<Example2 />} />
          <Route path="example3" element={<Example3 />} />
          <Route path="example4" element={<Example4 />} />
          <Route path="example5" element={<Example5 />} />
          <Route path="example6" element={<Example6 />} />
          <Route path="example7" element={<Example7 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
