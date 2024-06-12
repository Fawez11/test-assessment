import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Workouts from './components/Workouts';
import Users from './components/Users';
import DummyData from "./data/DummyData.js"
const App = () => {
  const [view, setView] = useState("home");
  const [data,setData]= useState(DummyData)
  const handleChangeView = (view) => {
    setView(view);
  }

  return (
    <div>
      <Navbar handleChangeView={handleChangeView} />
      <div className="content">
        {view === "home" && <div>Home</div>}
        {view === "users" && <div><Users data={data}/></div>}
        {view === "workouts" && <div><Workouts/></div>}
      </div>
    </div>
  );
}

export default App;
