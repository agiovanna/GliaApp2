import axios from 'axios';

interface ViaCEPResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const SearchCEP = async (cep: string): Promise<ViaCEPResponse | null> => {
  try {
    const response = await axios.get<ViaCEPResponse>(
      `https://viacep.com.br/ws/${cep}/json/`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Erro ao buscar CEP:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar CEP:', error);
    return null;
  }
};