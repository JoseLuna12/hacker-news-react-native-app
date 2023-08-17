import { ActivityIndicator, View, StyleSheet } from 'react-native';
export default LoadingPlaceholder = () => {
    return (
        <View style={style.loadingPlaceholder}>
            <ActivityIndicator size="large" />
        </View>
    )
}

const style = StyleSheet.create({
    loadingPlaceholder: {
        height: "100%",

        justifyContent: "center",
        alignItems: "center"
    }
})