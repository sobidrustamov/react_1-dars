import Header from "./Components/Header";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Header />
      <h1>Hammaga salom!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro sunt
        hic deleniti reprehenderit repellendus adipisci voluptatibus! Sapiente
        qui nam, enim dignissimos eius excepturi sit aliquid. Laboriosam sit cum
        in.
      </p>
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}

export default App;
