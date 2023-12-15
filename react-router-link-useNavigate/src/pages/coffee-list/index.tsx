import { useNavigate } from 'react-router-dom';

function CoffeeList() {
    const navigate = useNavigate();

    function handleClick() {
      navigate('/home');
      // navigate(-1); --retorna para a página anterior
    }
    return (
        <div>
            <h1>CoffeeList page</h1>
            <button onClick={ handleClick }>Home</button>
        </div>
    )
  }
  
  export default CoffeeList;