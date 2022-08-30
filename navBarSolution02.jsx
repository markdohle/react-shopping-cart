// Ex 2 - remove any item from navbar with less than 2 in stock
/*
Set a minimum stock that we need to keep for it to be displayed.

list1 is an array of array of objects with an instock value <= minstock.
NavBar has two parameters that are pulled from the rendered DOM.
1. menuitems
2. minstock
*/
function NavBar({ menuitems, minstock }) {
  console.log(NavBar)
  let list1 = menuitems.filter(item => item.instock >= minstock);
  let list2 = list1.map((item, index) => {
    return <li key={index.toString()}>{item.name}</li>;
  });

  // note that React needs to have a single Parent
  return <ul style={{ listStyleType: "none" }}>{list2}</ul>;
}
/*
  Array of objects and each object has a name, and number of items instock. 
  */
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

/*
'minstock' to show in the DOM is set to '{2}'. This is used to filter out if menueitems.istock <= 2.
/*
NavBar JSX elemnent is the React component with two properties that used as parameters for the component function above. React passes JSX attributes and children to the component as a single object.
*/ 

ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2} />,
  document.getElementById("root")
);
