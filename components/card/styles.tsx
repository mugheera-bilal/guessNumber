import { StyleSheet } from "react-native";
import { deviceWidth } from "../../constants/dimensions";

const styles = StyleSheet.create ({
    cardContainer : {
        backgroundColor : '#4abfa1',
        padding : 18,
        marginTop : deviceWidth > 380 ? 50 : 100,
        marginHorizontal : 40,
        borderRadius : 10,
        elevation : 10,
        shadowColor : 'black',
        shadowOffset : {width : 10 ,height : 10},
        shadowRadius :  10,  
        alignItems : 'center',
        justifyContent : 'center'
        
    },

})

export default styles