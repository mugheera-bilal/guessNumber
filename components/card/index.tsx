import { Text, View } from "react-native"
import styles from "./styles"

function Card ({children} : any){
    return <View style = {styles.cardContainer}>{children}</View>

}

export default Card