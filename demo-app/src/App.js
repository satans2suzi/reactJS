import './App.css';
import NavBar from "./components/NavBar";
import React from "react";

class App extends React.Component {
    render() {
        let sinhvien = [
            {
                id: 1,
                ten: 'Thai',
                tuoi: 28,
            },
            {
                id: 2,
                ten: 'Yen',
                tuoi: 25,
            },
            {
                id: 3,
                ten: 'Minh',
                tuoi: 2,
            },
        ]
        let elements = sinhvien.map((item,index) =>{
            return (
                <div>
                    <NavBar
                            key  ={item.id}
                            name ={item.ten}
                            tuoi ={item.tuoi}/>
                </div>
            );
        })
        return (
            <div>
                <h1>Test</h1>
                { elements }
            </div>
        );
    }
}

export default App;
