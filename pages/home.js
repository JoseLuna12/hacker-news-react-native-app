
import { StatusBar } from 'expo-status-bar';
import { FlatList, RefreshControl, SafeAreaView, View } from 'react-native';
import { useEffect, useState } from 'react'
import Item from '../components/Item';
import styles from '../styles/styles';
import Loading from '../components/Loading';
import * as Haptics from 'expo-haptics';


export default Home = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [posts, setPosts] = useState([])
    const initPosts = async () => {
        const result = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
        const { hits } = await result.json()
        setPosts(hits)
    }

    useEffect(() => {
        initPosts()
    }, [])

    const refreshPosts = async () => {
        setRefreshing(true)
        await initPosts()
        setTimeout(() => {
            setRefreshing(false)
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
            // .impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        }, 800);
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar style="dark" />
                {
                    posts.length == 0 ?
                        <Loading />
                        :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl refreshing={refreshing} onRefresh={refreshPosts} />
                            }
                            data={posts}
                            renderItem={({ item }) => <Item blog={item} />}
                            keyExtractor={item => item.objectID}

                        />
                }
            </View>
        </SafeAreaView>
    );
}

