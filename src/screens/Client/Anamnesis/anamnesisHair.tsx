import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisHair({ dataAnamnese }: { dataAnamnese: any }) {

    const [data, setData] = useState<
        {
            anamneseCabId: number,
            anamneseCabProbSaude: string,
            anamneseCabQuimica: string,
            anamneseCabFrequencia: string,
            anamneseCabProbFamiliar: string,
            anamneseCabDoencaCc: string,
            anamneseCabCirurgiaLesao: string,
            anamneseCabInfoRelativa: string,
            ClienteId: number,
        }[]
    >([]);


    useEffect(() => {
        async function searchAnamnese() {
            try {

                const anamnese = await api.get('/getAnamneseCabelo');
                setData(anamnese.data);

                if (anamnese.data.length > 0) {
                    dataAnamnese({
                        ClienteId: anamnese.data[0].ClienteId,
                        AnamneseId: anamnese.data[0].anamneseCabId,
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

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseCabId}>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>1 - Você tem algum problema de saúde que possa afetar o seu cabelo ou o tratamento capilar?</Text>
                            <Text>{data.anamneseCabProbSaude}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Já realizou algum tratamento químico no cabelo anteriormente?</Text>
                            <Text>{data.anamneseCabQuimica}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Com que frequência você lava o seu cabelo?</Text>
                            <Text>{data.anamneseCabFrequencia}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - Algum membro da sua família tem histórico de problemas capilares?</Text>
                            <Text>{data.anamneseCabProbFamiliar}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Já foi diagnosticado com alguma doença do couro cabeludo, como dermatite seborreica (“caspa”), psoríase (“psoríase em placas”) ou alopecia?</Text>
                            <Text>{data.anamneseCabDoencaCc}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - Já fez alguma cirurgia no couro cabeludo ou teve algum tipo de lesão anteriormente?</Text>
                            <Text>{data.anamneseCabCirurgiaLesao}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Alguma outra informação relevante que você gostaria de compartilhar?</Text>
                            <Text>{data.anamneseCabInfoRelativa}</Text>
                        </View>

                    </View>
                ))
            ) :
                (
                    <View>
                        <Text style={{ textAlign: "center", }}>
                            Preencha a ficha de anamnese de cabelo para continuar
                        </Text>
                    </View>
                )}


        </View>
    );
}