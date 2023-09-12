// <div id="parent">
//     <div id="child">
//         <h1>h1 tag</h1>
//         <h2>h2 tag</h2>
//     </div>
// </div>  


const heading1 = React.createElement("h1", {id:"heading1"}, "h1 tag");
const heading2 = React.createElement("h2", {}, "h2 tag");
const divChild = React.createElement("div", { id: "child" }, [heading1, heading2]);
const divParent = React.createElement("div", { id: "parent" }, divChild);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divParent);
