import { api } from "../../../lib/axios";

interface RatingCount {
  ratingCount: number;
}

export async function readRatingCount(id: number): Promise<RatingCount> {
  try {
    const response = await api.get(`/getRatingCount/${id}`);
    console.log('Número de avaliações: ', response.data.ratingCount);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter o número de avaliações:', error);
    return { ratingCount: 0 };
  }
} 