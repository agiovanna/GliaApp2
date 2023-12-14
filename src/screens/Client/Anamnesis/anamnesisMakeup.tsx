import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisMakeup({ dataAnamnese }: { dataAnamnese: any }) {

    const [data, setData] = useState<
        {
            anamneseMaqId: number,
            anamneseMaqTratamento: string,
            anamneseMaqManchaPele: string,
            anamneseMaqLenteCont: string,
            anamneseMaqTipoPele: string,
            anamneseMaqOleosidade: string,
            anamneseMaqProbPele: string,
            anamneseMaqCirurgiaRosto: string,
            anamanamneseMaqInfoRelevante: string,
            ClienteId: number,
        }[]
    >([]);


    useEffect(() => {

        async function searchAnamnese() {

            const anamnese = await api.get('/getAnamneseMaq');
            setData(anamnese.data);

            if (anamnese.data.length > 0) {
                dataAnamnese({
                    ClienteId: anamnese.data[0].ClienteId,
                    AnamneseId: anamnese.data[0].anamneseMaqId,
                });
            }

        }

        searchAnamnese();

    }, []);

    return (
        <View style={{ marginTop: 30, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 10, }}>


            {data && data.length > 0 ? (

                data.map((data) => (

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseMaqId}>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }} >
                            <Text style={{ fontWeight: "bold" }}>1 - Realizou tratamento dermatológico recentemente?</Text>
                            <Text>{data.anamneseMaqTratamento}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Manchas na pele?</Text>
                            <Text>{data.anamneseMaqManchaPele}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Possui lentes de contato?</Text>
                            <Text>{data.anamneseMaqLenteCont}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - Qual o tipo da sua pele?</Text>
                            <Text>{data.anamneseMaqTipoPele}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Seu grau de oleosidade?</Text>
                            <Text>{data.anamneseMaqOleosidade}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - Possui problemas de pele?</Text>
                            <Text>{data.anamneseMaqProbPele}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Fez alguma cirurgia no rosto recentemente?</Text>
                            <Text>{data.anamneseMaqCirurgiaRosto}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>8 - Alguma outra informação relevante que você gostaria de compartilhar?</Text>
                            <Text>{data.anamneseMaqTratamento}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>9 - Alguma outra informação relevante que você gostaria de compartilhar?</Text>
                            <Text>{data.anamanamneseMaqInfoRelevante}</Text>
                        </View>

                    </View>

                ))
            ) :
                (
                    <View>
                        <Text style={{ textAlign: "center", }}>
                            Preencha a ficha de anamnese de maquiagem para continuar
                        </Text>
                    </View>
                )}
        </View>
    );
}