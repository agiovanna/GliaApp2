import { Alert } from 'react-native'
import { api } from "../../lib/axios";

interface info {
    tb_profissional_desc: string;
    tb_profissional_cnpj: string;
}

export async function readInfo(id:number): Promise<info | null> {
    try {
        const response = await api.get(`/getProfessionalsInfo/${id}`);
        console.clear();
        console.log('informações profissionais: ', response.data)
        return response.data.info || null;
    }
    catch (error) {
        console.log('Houve um erro:' + error);
        return null;
    }
}
