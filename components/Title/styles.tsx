import { StyleSheet } from "react-native";
import { theme } from "../PrimaryButton/theme";

const styles = StyleSheet.create ({
    title : {
        fontSize : 34,
        textAlign : 'center',
        fontWeight : 'bold',
        borderWidth : 4,
        color : theme.mainTitle,
        borderColor : theme.mainTitle,
        marginTop : 20,
        padding : 6,
    }
})

export default styles