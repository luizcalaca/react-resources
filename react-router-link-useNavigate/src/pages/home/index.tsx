import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Coffeeteria</h1>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>
    </>
  )
}

export default Home;