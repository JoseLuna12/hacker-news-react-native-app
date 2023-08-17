
import { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import Loading from '../components/Loading'

export default Detail = (props) => {
    const [loading, setLoading] = useState(true)
    const { params } = props.route

    const onLoadStart = () => {
        setLoading(true)
    }

    const onloadEnd = () => {
        setLoading(false)
    }

    return (
        <View style={{ flex: 1 }}>
            {
                loading &&
                <Loading />
            }
            <WebView onLoadStart={onLoadStart} onLoadEnd={onloadEnd} source={{ uri: params.url }} style={{ flex: 1 }} />
        </View>
    )
}