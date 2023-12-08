import { readRating } from "../../../../api/readRating/readAll";
import { readRatingCount } from "../../../../api/readRating/readCount";
import { readRatingStars } from "../../../../api/readRating/readAverage";
import React, { useEffect, useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import RatingStars from "../../../../components/RatingStars";


interface rating {
    tb_avaliacao_nota: number;
    tb_avaliacao_comentario: string;
    tb_avaliacao_createdAt: number;
    servico: {
        solicitacao: {
            cliente: {
                tb_cliente_nome: string;
                tb_cliente_img: string;
            }
        }
    }[];
}

interface stars {
    stars: number;
}

interface ratingCount {
    ratingCount: number;
}

export function RatingScreen() {
    const id = 1 //solicitação id
    const [ratings, setRatings] = useState<rating[]>([]);
    const [stars, setStars] = useState<stars>({ stars: 0 });
    const [ratingCounts, setRatingCounts] = useState<ratingCount>({ ratingCount: 0 });

    const [userRating, setUserRating] = useState<number>(0);

    const handleRatingPress = (rating: number) => {
        setUserRating(rating);
    };

    //todas as avaliações
    useEffect(() => {
        const carregarAvaliacoes = async () => {
            try {
                const data = await readRating(id)
                setRatings(data);
            } catch (error) {
                console.error('Erro ao carregar avaliações: ', error)
            }
        };
        carregarAvaliacoes();
    }, []);

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
        <View>
            {/* media de avaliações */}
            <View>
                {stars ? (
                    <View>
                        <RatingStars rating={userRating} onRatingPress={handleRatingPress} />
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
                    <Text>0</Text>
                )}
            </View>

            {ratings.map((rating, index) => (
                <View>
                    <Text>{rating.tb_avaliacao_nota}</Text>
                    <Text>{rating.tb_avaliacao_comentario}</Text>
                    <Text>{rating.tb_avaliacao_createdAt}</Text>

                    {rating.servico.map((cliente, itemIndex) => (
                        <View key={itemIndex}>
                            <AntDesign name="user" size={24} color="black" />
                            <Text>{cliente.solicitacao.cliente.tb_cliente_nome}</Text>
                        </View>

                    ))}
                </View>
            ))}

        </View>);
}