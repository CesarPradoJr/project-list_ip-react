//Importação de ícones para cada botão do nosso navbar e atribuição de rotas para cada botão
import React from 'react';
import * as AiIcons from 'react-icons/ai';



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Lista Tor',
    path: '/list',
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: 'nav-text'
  },
  {
    title: 'Lista Filtrada',
    path: '/filtered_list',
    icon: <AiIcons.AiOutlineProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Exclusão',
    path: '/exclude',
    icon: <AiIcons.AiOutlineFileExcel />,
    cName: 'nav-text'
  },
  {
    title: 'Lista Exclusão',
    path: '/exclude_list',
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: 'nav-text'
  }
];
