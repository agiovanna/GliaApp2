import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisNail({ dataAnamnese }: { dataAnamnese: any }) {

    const [data, setData] = useState<
        {
            anamneseUnhaId: number,
            anamneseUnhaRetCuticula: string,
            anamneseUnhaEncravada: string,
            anamneseUnhaProbOnicomicose: string,
            anamneseUnhaProb: string,
            anamneseUnhaRoerUnha: string,
            anamneseUnhaEsportesImpacto: string,
            anamneseUnhaPiscMar: string,
            anamneseUnhaInfoRelevante: string,
            ClienteId: number
        }[]
    >([]);

    useEffect(() => {

        async function searchAnamnese() {
            const anamnese = await api.get('/getAnamneseUnha');
            setData(anamnese.data);


            if (anamnese.data.length > 0) {
                dataAnamnese({
                    ClienteId: anamnese.data[0].ClienteId,
                    AnamneseId: anamnese.data[0].anamneseUnhaId,
                });
            }
        }

        searchAnamnese();
    }, []);

    return (
        <View>

            {data && data.length > 0 ? (

                data.map((data) => (

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseUnhaId}>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>1 - Costuma retirar o eponíquio (cutícula)?</Text>
                            <Text>{data.anamneseUnhaRetCuticula}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Possui onicocriptose (unhas encravadas)?</Text>
                            <Text>{data.anamneseUnhaEncravada}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Possui problemas de onicomicose (micoses/fungos ou outros)?</Text>
                            <Text>{data.anamneseUnhaProbOnicomicose}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - A unha apresenta problemas como: descamação, estrias, manchas ou deslocamento?</Text>
                            <Text>{data.anamneseUnhaProb}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Possui o hábito de roer unhas?</Text>
                            <Text>{data.anamneseUnhaRoerUnha}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - Pratica esportes de impacto?</Text>
                            <Text>{data.anamneseUnhaEsportesImpacto}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Costuma entrar em piscina/mar com frequência?</Text>
                            <Text>{data.anamneseUnhaPiscMar}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>8 - Existe algum problema que julgue necessário informar ao profissional antes do procedimento?</Text>
                            <Text>{data.anamneseUnhaInfoRelevante}</Text>
                        </View>

                    </View>
                ))
            ) :
                (
                    <View>
                        <Text style={{ textAlign: "center", }}>
                            Preencha a ficha de anamnese de unha para continuar
                        </Text>
                    </View>
                )}

        </View>
    );
}