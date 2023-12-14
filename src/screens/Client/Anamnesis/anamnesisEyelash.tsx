import { useEffect, useState } from "react";
import { View, Text, } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisEyelash({ dataAnamnese }: {dataAnamnese: any}) {

    const [data, setData] = useState<
        {
            anamneseCilId: number,
            anamneseCilTratamento: string,
            anamneseCilProcedimento: string,
            anamneseCilProbOftalmo: string,
            anamneseCilDormeLado: string,
            anamneseCilUsoColirio: string,
            anamneseCilDoenca: string,
            anamneseCilInfoRelevante: string,
            ClienteId: number
        }[]
    >
        ([]);

    useEffect(() => {
        async function searchAnamnese() {
            try {
                const anamnese = await api.get('/getAnamneseCilios');
                setData(anamnese.data);

                if (anamnese.data.length > 0) {
                    dataAnamnese({
                        ClienteId: anamnese.data[0].ClienteId,
                        AnamneseId: anamnese.data[0].anamneseCilId,
                    });
                }
            }

            catch (error) {
                console.error('Erro ao obter dados da anamnese:', error);
            }
        }

        searchAnamnese();
    }, []);


    return (
        <View>

            {data && data.length > 0 ? (

                data.map((data) => (

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseCilId}>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>1 - Realizou algum procedimento nos olhos recentemente?</Text>
                            <Text>{data.anamneseCilProcedimento}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Está em tratamento oncológico (especialidade voltada ao tratamento do câncer)?</Text>
                            <Text>{data.anamneseCilTratamento}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Tem algum problema oftalmológico (problema nos olhos)?</Text>
                            <Text>{data.anamneseCilProbOftalmo}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - Costuma dormir de lado?</Text>
                            <Text>{data.anamneseCilDormeLado}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Faz uso de algum colírio?</Text>
                            <Text>{data.anamneseCilUsoColirio}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - Tem glaucoma, blefarite ou algum problema ocular?</Text>
                            <Text>{data.anamneseCilDoenca}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Existe algum problema que julgue necessário informar ao profissional antes do procedimento?</Text>
                            <Text>{data.anamneseCilInfoRelevante}</Text>
                        </View>

                    </View>

                ))
            ) :
                (
                    <View>
                        <Text style={{ textAlign: "center", }}>
                            Preencha a ficha de anamnese para continuar
                        </Text>
                    </View>
                )}

        </View>
    );
}