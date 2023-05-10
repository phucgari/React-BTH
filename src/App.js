import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShowList from "./component/ShowList";
import Detail from "./component/Detail";
import Create from "./component/Create";
import Update from "./component/Update";
import Delete from "./component/Delete";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<ShowList/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/update" element={<Update/>}/>
                    <Route path="/delete" element={<Delete/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
