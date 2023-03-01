import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: 'center',

    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',

    },

    buttonContainer: {
        backgroundColor: '#0C6157',
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    },


});

//make this component available to the app
export default styles;