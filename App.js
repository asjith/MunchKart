import React from "react";
import ReactDOM from "react-dom/client";

const element = <h2>This is an element</h2>;

const TitleComponent = () => {
    return (
        <div>
            <h1>Namaste React</h1>
            {element}                 
        </div>
        
    );
};

const HeaderComponent = () => {
    return (
        <div>
            <h1>Welcome to Namaste React</h1>
            <TitleComponent />
            <TitleComponent></TitleComponent>
            {TitleComponent()}
        </div>
    );
};
/*
the HeaderComponent written is an arrow function. The same can be written also as:
const HeaderComponent = function () {
    return (
        <div>
            <TitleComponent />
            <h1>Welcome to Namaste React</h1>
        </div>
    );
};

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxElement);
root.render(<HeaderComponent/>);

