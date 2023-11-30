import { Alert } from 'react-native'
import { api } from "../../lib/axios";

interface catalog {
    tb_catalogo_nome: string;
  tb_catalogo_desc: string;
  tb_catalogo_id: number;
  itens: {
    tb_item_img: string;
    tb_item_nome: string;
    tb_item_desc: string;
    tb_item_tempo: number;
    tb_item_valor: number;
  }[];
}

export async function readCatalog(): Promise<catalog[]> {
    try {
        const response = await api.get('/getItensCatalogs');
        console.clear();
        console.log('catálogos: ', response.data)
        return response.data.catalog;
    }
    catch (error) {
        console.log('Houve um erro:' + error);
        console.log('Erro: ', 'Não foi possível obter os itens/catálogos!');
        return[];
    }
}
