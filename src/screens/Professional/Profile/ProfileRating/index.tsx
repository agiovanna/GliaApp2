import { readRating } from "../../../../api/readRating/readAll";
import { readRatingCount } from "../../../../api/readRating/readCount";
import { readRatingStars } from "../../../../api/readRating/readAverage";
import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import RatingStars from "../../../../components/RatingStars";
import { styles } from './style'
import { format } from 'date-fns';



interface Rating {
    avaliacao: {
        tb_avaliacao_nota: number;
        tb_avaliacao_comentario: string;
        tb_avaliacao_createdAt: string;
    };
    solicitacao: {
        cliente: {
            tb_cliente_nome: string;
            tb_cliente_img: string;
        };
    };
    tb_servico_id: number;
}

interface stars {
    stars: number;
}

interface ratingCount {
    ratingCount: number;
}

export function RatingScreen() {
    const id = 1 //profissional id
    const [ratings, setRatings] = useState<Rating[]>([]);
    const [stars, setStars] = useState<stars>({ stars: 0 });
    const [ratingCounts, setRatingCounts] = useState<ratingCount>({ ratingCount: 0 });

    const [userRating, setUserRating] = useState<number>(0);


    const handleRatingPress = (rating: number) => {
        setUserRating(rating);
    };

    useEffect(() => {
        const carregarAvaliacoes = async () => {
            try {
                const data = await readRating(id);
                setRatings(data);
            } catch (error) {
                console.error('Erro ao carregar avaliações: ', error);
            }
        };

        carregarAvaliacoes();
    }, [id]);


    //media de avaliações
    useEffect(() => {
        const carregarMedia = async () => {
            try {
                const data = await readRatingStars(id)
                setStars(data);
            } catch (error) {
                console.error('Erro ao carregar média de avaliações: ', error)
            }
        };
        carregarMedia();
    }, []);

    //total de avaliações
    useEffect(() => {
        const carregarTotal = async () => {
            try {
                const data = await readRatingCount(id)
                setRatingCounts(data);
            } catch (error) {
                console.error('Erro ao carregar total de avaliações: ', error)
            }
        };
        carregarTotal();
    }, []);

    return (
        <View style={styles.conteiner}>
            {/* media de avaliações */}
            <View>

                <View style={{ marginVertical: 10 }} />

                {stars ? (
                    <View>
                        <View style={{ flexDirection: 'row', marginRight: 5 }}>
                            <AntDesign name="staro" size={24} color="yellow" />
                            <AntDesign name="staro" size={24} color="yellow" />
                            <AntDesign name="staro" size={24} color="yellow" />
                            <AntDesign name="staro" size={24} color="yellow" />
                            <AntDesign name="staro" size={24} color="yellow" />
                        </View>

                        <View style={{ marginVertical: -8 }} />
                        <Text style={{ marginLeft: 123 }}>{stars.stars},0</Text>
                    </View>
                ) : (
                    <Text>0,0</Text>
                )}
            </View>

            {/* total de avaliações  */}
            <View>
                {ratingCounts ? (
                    <View>
                        <Text>{ratingCounts.ratingCount} Avaliações no total</Text>
                    </View>
                ) : (
                    <Text>0 Avaliações no total</Text>
                )}
            </View>


            <View>
                {ratings.map((rating, index) => (
                    <View key={index}>
                        <View style={{ marginVertical: 10 }} />

                        {/* sobre a cliente  */}
                        <Text>{rating.solicitacao.cliente.tb_cliente_nome}</Text>
                        <Image source={{ uri: rating.solicitacao.cliente.tb_cliente_img }} style={styles.imgProfile} />

                        {/* sobre a avaliação */}
                        <AntDesign name="star" size={22} color="black" />

                        {/* Add a conditional check before accessing nested properties */}
                        <Text>{rating.avaliacao?.tb_avaliacao_nota}</Text>
                        <Text>{rating.avaliacao ? format(new Date(rating.avaliacao.tb_avaliacao_createdAt), 'dd/MM/yyyy') : ''}</Text>
                        <Text>{rating.avaliacao?.tb_avaliacao_comentario}</Text>

                        {/* Quebra de linha */}
                        <View style={{ marginVertical: 10 }} />
                    </View>
                ))}
            </View>

        </View>
    );
}