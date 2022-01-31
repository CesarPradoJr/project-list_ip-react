//Página responsável por incluir os ips desejados na lista de exclusão
import React from 'react';
import axios from 'axios';

async function exclude () {  
  let element_ip = document.getElementById("ip");
  let element_obs = document.getElementById("obs");
  let exclude_ip = await axios.post('http://localhost:3333/excludes/add_exclude', {'ip':element_ip.value, 'obs':element_obs.value})
  console.log(exclude_ip)
  }

function Exclude() {
  return (
    <div className='container'>
      <ul className='titulo'>
        <li>Exclusão</li>
      </ul>
      <div>
        <p>Digite aqui o ip que você deseja remover, junto com sua observação!</p>
        <form id='form' onSubmit={exclude}>
          <h5>Ip:</h5>
          <input type='text' id='ip' placeholder="Ip" ></input>
          <h5>Obs:</h5>
          <textarea id='obs'></textarea>
          <button type='submit'>Enviar</button>
        </form>
      </div>          
    </div>
  );
}

export default Exclude;
