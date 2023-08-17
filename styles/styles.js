import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f6',
    },
    item: {
        marginVertical: 5,
        marginHorizontal: 9,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        flexDirection: "row",
    },
    itemChild: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
    },
    itemTitleText: {
        paddingTop: 5,
        fontSize: 15,
        fontWeight: "bold"
    },
    itemChildBotomText: {
        fontSize: 11,
        color: "#aeaeb2"
    },
    itemWrapper: {
        flex: 0.8
    },
    itemCompanion: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "flex-end",
    }
});
