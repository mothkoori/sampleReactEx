import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    { title: "car insurance", price: "265,23", date: new Date(2021, 2, 14) },
    { title: "bike insurance", price: "165,23", date: new Date(2021, 1, 14) },
    { title: "health insurance", price: "565,23", date: new Date(2021, 5, 24) },
    { title: "loan insurance", price: "65,13", date: new Date(2021, 4, 1) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
