import { useState, useEffect } from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import { AnamnesisGlobal } from '../Anamnesis/anamnesisGlobal';
import { AnamnesisHair } from '../Anamnesis/anamnesisHair';
import { AnamnesisNail } from '../Anamnesis/anamnesisNail';
import { AnamnesisMakeup } from '../Anamnesis/anamnesisMakeup';
import { AnamnesisEyebrow } from '../Anamnesis/anamnesisEyebrow';
import { AnamnesisEyelash } from '../Anamnesis/anamnesisEyelash';



export function TheItem({ route, navigation }: { route: any, navigation: any }) {

    const [anamneseId, setAnamneseId] = useState();
    const [clienteId, setClientId] = useState();
    const [clienteLat, setClientLat] = useState();
    const [clienteLong, setClientLong] = useState();
    const [clienteName, setClientName] = useState();
    const [clienteTel, setClientTel] = useState();

    const {
        itemId,
        itemName,
        itemDesc,
        itemCost,
        itemTime,
        itemImg,
        categoryId,
        catalogId,
        professionalName,
        professionalId
    } = route.params;

    function Categoria() {

        switch (categoryId) {
            case 1:

                const ValuesCab = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteId && values.AnamneseId) {

                        console.log("Setting values:", values.ClienteId, " and ", values.AnamneseId);
                        setClientId(values.ClienteId);
                        setAnamneseId(values.AnamneseId);

                    }
                }

                const ValuesGeralCab = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteLat && values.ClienteLong && values.AnamneseId && values.ClienteTel && values.ClienteName) {

                        console.log("Setting values:", values.ClienteLat, " , ", values.ClienteLat, " , ", values.AnamneseId, " , ", values.ClienteName, " and ", values.ClienteTel);
                        setClientLat(values.ClienteLat);
                        setClientLong(values.ClienteLong);
                        setAnamneseId(values.AnamneseId);
                        setClientName(values.ClienteName);
                        setClientTel(values.ClienteTel);
                    }
                }

                return (
                    <>
                        <AnamnesisHair dataAnamnese={ValuesCab} />
                        <AnamnesisGlobal dataAnamnese={ValuesGeralCab} />
                    </>
                );

            case 2:
                const ValuesUnha = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteId && values.AnamneseId) {

                        console.log("Setting values:", values.ClienteId, " and ", values.AnamneseId);
                        setClientId(values.ClienteId);
                        setAnamneseId(values.AnamneseId);
                    }
                }

                const ValuesGeralUnha = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteLat && values.ClienteLong && values.AnamneseId && values.ClienteTel && values.ClienteName) {

                        console.log("Setting values:", values.ClienteLat, " , ", values.ClienteLat, " , ", values.AnamneseId, " , ", values.ClienteName, " and ", values.ClienteTel);
                        setClientLat(values.ClienteLat);
                        setClientLong(values.ClienteLong);
                        setAnamneseId(values.AnamneseId);
                        setClientName(values.ClienteName);
                        setClientTel(values.ClienteTel);
                    }
                }

                return (
                    <>
                        <AnamnesisNail dataAnamnese={ValuesUnha} />
                        <AnamnesisGlobal dataAnamnese={ValuesGeralUnha} />
                    </>
                );
            case 3:

                const ValuesMaq = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteId && values.AnamneseId) {

                        console.log("Setting values:", values.ClienteId, " and ", values.AnamneseId);
                        setClientId(values.ClienteId);
                        setAnamneseId(values.AnamneseId);
                    }
                }

                const ValuesGeralMaq = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteLat && values.ClienteLong && values.AnamneseId && values.ClienteTel && values.ClienteName) {

                        console.log("Setting values:", values.ClienteLat, " , ", values.ClienteLat, " , ", values.AnamneseId, " , ", values.ClienteName, " and ", values.ClienteTel);
                        setClientLat(values.ClienteLat);
                        setClientLong(values.ClienteLong);
                        setAnamneseId(values.AnamneseId);
                        setClientName(values.ClienteName);
                        setClientTel(values.ClienteTel);
                    }
                }

                return (
                    <>
                        <AnamnesisMakeup dataAnamnese={ValuesMaq} />
                        <AnamnesisGlobal dataAnamnese={ValuesGeralMaq} />
                    </>
                );

            case 4:
                const ValuesSob = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteId && values.AnamneseId) {

                        console.log("Setting values:", values.ClienteId, " and ", values.AnamneseId);
                        setClientId(values.ClienteId);
                        setAnamneseId(values.AnamneseId);
                    }
                }

                const ValuesGeralSob = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteLat && values.ClienteLong && values.AnamneseId && values.ClienteTel && values.ClienteName) {

                        console.log("Setting values:", values.ClienteLat, " , ", values.ClienteLat, " , ", values.AnamneseId, " , ", values.ClienteName, " and ", values.ClienteTel);
                        setClientLat(values.ClienteLat);
                        setClientLong(values.ClienteLong);
                        setAnamneseId(values.AnamneseId);
                        setClientName(values.ClienteName);
                        setClientTel(values.ClienteTel);
                    }
                }

                return (
                    <>
                        <AnamnesisEyebrow dataAnamnese={ValuesSob} />
                        <AnamnesisGlobal dataAnamnese={ValuesGeralSob} />
                    </>
                );

            case 5:

                const ValuesCil = (values: any) => {
                    console.log("Received values:", values);

                    if (values && values.ClienteId && values.AnamneseId) {

                        console.log("Setting values:", values.ClienteId, " and ", values.AnamneseId);
                        setClientId(values.ClienteId);
                        setAnamneseId(values.AnamneseId);

                    }
                }

                const ValuesGeralCil = (values: any) => {

                    console.log("Received values:", values);

                    if (values && values.ClienteLat && values.ClienteLong && values.AnamneseId && values.ClienteTel && values.ClienteName) {

                        console.log("Setting values:", values.ClienteLat, " , ", values.ClienteLat, " , ", values.AnamneseId, " , ", values.ClienteName, " and ", values.ClienteTel);
                        setClientLat(values.ClienteLat);
                        setClientLong(values.ClienteLong);
                        setAnamneseId(values.AnamneseId);
                        setClientName(values.ClienteName);
                        setClientTel(values.ClienteTel);
                    }
                }

                return (
                    <>
                        <AnamnesisEyelash dataAnamnese={ValuesCil} />
                        <AnamnesisGlobal dataAnamnese={ValuesGeralCil} />
                    </>
                );
            default:
                return null;
        }
    }

    const datas = {
        itemId,
        itemName,
        itemDesc,
        itemCost,
        itemTime,
        itemImg,
        categoryId,
        catalogId,
        professionalName,
        professionalId,
        clienteId,
        anamneseId,
        clienteLat,
        clienteLong,
        clienteName,
        clienteTel
    }


    if (datas) {
        console.log(datas);
    }

    return (
        <View style={{ alignItems: "center", marginTop: 40, flex: 1 }}>
            <ScrollView style={{ width: "100%", flex: 1, marginTop: 10, marginBottom: 20, }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} >

                <View style={{ alignItems: "center", flex: 1, width: "100%", }} key={itemId}>
                    <View style={{ marginTop: 30 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }} key={professionalId}>PROFISSIONAL: {professionalName}</Text>
                    </View>

                    <View style={{ width: "85%", marginTop: 20, backgroundColor: "#f1e1e1", paddingVertical: 16, paddingHorizontal: 16, alignItems: "center", borderRadius: 10, }}>
                        <Text>{itemTime}</Text>
                        <Image source={{ uri: itemImg }} style={{ width: "80%", height: 300, marginTop: 20, borderRadius: 10, }} />
                        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 14, }}>{itemName}</Text>
                        <Text style={{ fontSize: 12, marginTop: 8, }}>{itemDesc}</Text>
                        <Text style={{ fontSize: 22, marginTop: 12, fontWeight: "bold" }}>R$ {itemCost}</Text>
                    </View>
                </View>

                <View style={{ width: "100%", alignItems: "center", marginTop: 30, }}>
                    <Text style={{ marginTop: 40, }}>Forma de pagamento</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", marginTop: 20, }}>
                        <Button title='Crédito' />
                        <Button title='Débito' />
                        <Button title='Dinheiro' />
                    </View>
                </View>

                <View style={{ width: "100%", alignItems: "center", }}>
                    <View style={{ width: "90%", alignItems: "center", marginTop: 30, borderRadius: 10, backgroundColor: "#E6E6FA", paddingHorizontal: 16, paddingVertical: 12, }}>
                        {Categoria()}
                    </View>
                </View>

                <View style={{ width: "100%", paddingHorizontal: 30, marginTop: 20, marginBottom: 100, }}>
                    <Button title='SOLICITAR' onPress={() => {
                        navigation.navigate('Stopwatch', {
                            clienteLat: datas.clienteLat, 
                            clienteLong: datas.clienteLong,
                            itemId: datas.itemId,
                            itemName: datas.itemName,
                            itemCost: datas.itemCost,
                            clienteId: datas.clienteId,
                            clienteName: datas.clienteName,
                            clienteTel: datas.clienteTel,
                            professionalId: professionalId,
                            anamneseId: datas.anamneseId
                        });
                    }} />
                </View>
            </ScrollView > 
        </View >

    );
}