import { Alert } from 'react-native'
import { api } from "../../../lib/axios";

interface Rating {
  avaliacao: {
    tb_avaliacao_nota: number;
    tb_avaliacao_comentario: string;
    tb_avaliacao_createdAt: string;
  };
  solicitacao: {
    cliente: {
      tb_cliente_nome: string;
      tb_cliente_img: string;
    };
  };
  tb_servico_id: number; // Adicione qualquer outro campo que você precise
  // Adicione outros campos conforme necessário
}

export async function readRating(id: number): Promise<Rating[]> {
  try {
    const response = await api.get(`/getRatings/${id}`);
    console.clear();
    console.log('avaliações: ', response.data);
    return response.data.rating;
  } catch (error) {
    console.log('Houve um erro:' + error);
    console.log('Erro: ', 'Não foi possível obter as avaliações!');
    return [];
  }
}
