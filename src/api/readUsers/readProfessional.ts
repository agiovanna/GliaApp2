import { Alert } from 'react-native'
import { api } from "../../lib/axios";

interface professionals {
  tb_profissional_nome: string,
  tb_profissional_id: number
}

export async function readProfessional(): Promise<professionals[]> {
  try {
    const response = await api.get('/getProfessionals');
    console.clear();
    console.log('profissionais: ', response.data)
    return response.data.professionals;
  }
  catch (error) {
    console.log('Houve um erro:' + error);
    console.log('Erro: ', 'Não foi possível obter as profissionais!');
    return [];
  }
}
