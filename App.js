/*
<div id="parent">
    <div id="child">
        <h1>heading h1</h1>
        <h2>heading h2</h2>
    </div>
</div>


// const heading = React.createElement("h1", {}, "Hello World from React");
const heading = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div",
        {id: "child"},
        [React.createElement("h1", {}, "hi"),
        React.createElement("h1", {}, "hello")]
    )
    );

console.log(heading); // print an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/




const parent = React.createElement("div", {id: "parent"},[
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"), 
    ]),
])

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);