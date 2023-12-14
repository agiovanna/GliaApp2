import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisEyebrow({ dataAnamnese }: { dataAnamnese: any }) {

    const [data, setData] = useState<
        {
            anamneseSobId: number,
            anamneseSobQuedaPelo: string,
            anamneseSobAlergiaHenna: string,
            anamneseSobChumbo: string,
            anamneseSobSensi: string,
            anamneseSobCaspa: string,
            anamneseSobOleoPele: string,
            anamneseSobTipoPelo: string,
            anamneseSobInfoRelevante: string,
            ClienteId: number
        }[]
    >([]);

    useEffect(() => {

        async function searchAnamnese() {

            const anamnese = await api.get('/getAnamneseSob');
            setData(anamnese.data);


            if (anamnese.data.length > 0) {
                dataAnamnese({
                    ClienteId: anamnese.data[0].ClienteId,
                    AnamneseId: anamnese.data[0].anamneseSobId,
                });
            }

        }

        searchAnamnese();

    }, []);


    return (
        <View>

            {data && data.length > 0 ? (

                data.map((data) => (

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseSobId}>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>1 - Possui queda de pelos ou falhas? </Text>
                            <Text>{data.anamneseSobQuedaPelo}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Possui alergia a henna? </Text>
                            <Text>{data.anamneseSobAlergiaHenna}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Possui alergia a chumbo? </Text>
                            <Text>{data.anamneseSobChumbo}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - Oleosidade da pele:</Text>
                            <Text>{data.anamneseSobOleoPele}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Grau de sensibilidade da pele:</Text>
                            <Text>{data.anamneseSobSensi}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - Apresenta psoríase ou caspa? </Text>
                            <Text>{data.anamneseSobCaspa}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Tipo de pelo:</Text>
                            <Text>{data.anamneseSobTipoPelo}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>8 - Existe algum problema que julgue necessário informar ao profissional antes do procedimento?</Text>
                            <Text>{data.anamneseSobInfoRelevante}</Text>
                        </View>

                    </View>


                ))
            ) :
                (
                    <View>
                        <Text style={{ textAlign: "center", }}>
                            Preencha a ficha de anamnese de sobrancelha para continuar
                        </Text>
                    </View>
                )}

        </View>
    );
}