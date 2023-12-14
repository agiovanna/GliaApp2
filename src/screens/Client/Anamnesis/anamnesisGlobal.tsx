import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../../../lib/axios";

export function AnamnesisGlobal({ dataAnamnese }: { dataAnamnese: any }) {

    const [data, setData] = useState<
        {
            anamneseGeralId: number,
            anamneseGeralGestante: string,
            anamneseGeralDiabete: string,
            anamneseGeralMedicacao: string,
            anamneseGeralAlergia: string,
            anamneseGeralConvulsao: string,
            anamneseGeralHemofilico: string,
            anamneseGeralHipertensao: string,
            anamneseGeralTireoide: string,
            ClienteId: number,
            ClienteLat: number,
            ClienteLong: number,
            ClienteName: number,
            ClienteTel: number
        }[]
    >([]);

    useEffect(() => {

        async function searchAnamnese() {

            const anamnese = await api.get('/getAnamneseGeral');
            setData(anamnese.data);

            if (anamnese.data.length > 0) {
                dataAnamnese({
                    ClienteLat: anamnese.data[0].ClienteLat,
                    ClienteLong: anamnese.data[0].ClienteLong,
                    ClienteName: anamnese.data[0].ClienteName,
                    ClienteTel: anamnese.data[0].ClienteTel,
                    AnamneseId: anamnese.data[0].anamneseGeralId,
                });
            }
        }

        searchAnamnese();

    }, []);

    return (

        <View>

            {data && data.length > 0 ? (

                data.map((data) => (

                    <View style={{ alignItems: "center", width: "100%", }} key={data.anamneseGeralId}>
                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>1 - Está gestante ou amamentando?</Text>
                            <Text>{data.anamneseGeralGestante}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>2 - Possui diabetes?</Text>
                            <Text>{data.anamneseGeralDiabete}</Text>
                        </View>


                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>3 - Faz o uso de algum medicamento?</Text>
                            <Text>{data.anamneseGeralMedicacao}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>4 - Possui alergia a algum tipo de cosmético ou algum outro componente?</Text>
                            <Text>{data.anamneseGeralAlergia}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>5 - Possui epilepsia ou convulsões?</Text>
                            <Text>{data.anamneseGeralConvulsao}</Text>
                        </View>


                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>6 - É hemofílico?</Text>
                            <Text>{data.anamneseGeralHemofilico}</Text>
                        </View>

                        <View style={{ marginTop: 16, flexDirection: "column", width: "100%", alignItems: "center" }}>
                            <Text style={{ fontWeight: "bold" }}>7 - Possui hipertensão?</Text>
                            <Text>{data.anamneseGeralHipertensao}</Text>
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