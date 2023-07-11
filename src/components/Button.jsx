import {useContext} from "react"
import { TouchableOpacity, Text } from "react-native"
import { ThemeContext } from "../context/ThemeContext"
import { Styles } from "../styles/GlobalStyles"

const ButtonProps = {
    onPress: () => {},
    title: '',
    isGreen: undefined,
    isOrange: undefined,
}

export default function Button({title, onPress, isGreen, isOrange}) {
    const theme = useContext(ThemeContext)
    return (
        <TouchableOpacity 
            style={
                isGreen
                ? Styles.btnGreen 
                : isOrange 
                ? Styles.btnOrange 
                : theme === "light" 
                ? Styles.btnLight 
                : Styles.btnDark
            } 
            onPress={onPress}>
            <Text 
               style={
                   isGreen || isOrange 
                   ? Styles.smallTextLight
                   : theme === "dark" 
                   ? Styles.smallTextLight 
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
    
}