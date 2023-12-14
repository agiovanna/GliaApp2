import { api } from "../../lib/axios";


export async function createService(
    professionalId: number,
    requestId: number

) {
    try {

        await api.post('/createService', {
            professionalId,
            requestId
        });

        console.log('Serviço Criado !!');

    }
    catch (error) {
        console.log('ERRO PARA CRIAR SERVIÇO:  ' + error);
    }
}