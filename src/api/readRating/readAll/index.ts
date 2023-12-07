import { Alert } from 'react-native'
import { api } from "../../../lib/axios";

interface rating {
    tb_avaliacao_nota: number;
    tb_avaliacao_comentario: string;
    tb_avaliacao_createdAt: number;
    servico: {
        solicitacao: {
            cliente: {
                tb_cliente_nome: string;
                tb_cliente_img: string;
            }
        }
    }[];
}

export async function readRating(id:number): Promise<rating[]> {
    try {
        const response = await api.get(`/getRatings/${id}`);
        console.clear();
        console.log('avaliações: ', response.data)
        return response.data.rating;
    }
    catch (error) {
        console.log('Houve um erro:' + error);
        console.log('Erro: ', 'Não foi possível obter os itens/catálogos!');
        return [];
    }
}