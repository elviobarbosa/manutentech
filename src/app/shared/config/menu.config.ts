import { urls } from "./urls.config";

export const mainMenu: {
    label: string;
    url?: string;
    submenu?: { label: string; url: string }[];
  }[] = [
    {
      label: 'Início',
      url: '/'
    },
    {
      label: 'Cadastro',
      submenu: [
        {
          label: 'Cadastro clientes',
          url: urls.cadClientes
        }
      ]
    }
  ];