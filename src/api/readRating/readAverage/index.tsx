import { api } from "../../../lib/axios";

interface stars {
  stars: number;
}

export async function readRatingStars(id: number): Promise<stars> {
  try {
    const response = await api.get(`/getRatingsStars/${id}`);
    console.log('Média das notas: ', response.data.stars);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter a média das notas:', error);
    return { stars: 0 };
  }
}