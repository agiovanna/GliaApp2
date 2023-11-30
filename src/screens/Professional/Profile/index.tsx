import { StyleSheet, View } from "react-native";

import HeaderProfessional from "./ProfileHeader";
import TopBarNavigator from "./Navigators/BarNavigator";


export function ProfileProfessional() {
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