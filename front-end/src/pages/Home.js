//Página responsável por trazer a lista geral de ip
import React from 'react';
import axios from 'axios';

  async function api_list () {  
    let list_api = await axios.get('http://localhost:3333/list')
  }

  function Home() {
    return (
      <div className='container'>
        <ul className='titulo'>
          <li>Home</li>
        </ul>
        <div>
          <form id='form' onClick={api_list}>
            <p></p>
            <button type='button'>Gerar Lista de IP</button>
          </form>
        </div>          
      </div>
    );
  }



export default Home