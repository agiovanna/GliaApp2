import { StyleSheet, View } from "react-native";

import HeaderProfessional from "../ProfileHeaderClientVision";
import TopBarNavigator from "../Navigators/BarNavigator";


export function ProfessionalProfileClientVision() {
    return (
        <View style={styles.container}>
            <HeaderProfessional />
            <TopBarNavigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});