import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Página em Desenvolvimento</h1>
      <p>Desculpe, a página que você está procurando ainda não foi desenvolvida.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
}

export default NotFound;
