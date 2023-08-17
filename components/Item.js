import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/styles';
import { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

export default Item = ({ blog }) => {

    const navigation = useNavigation()

    const [background, setBackground] = useState("white")

    const press = useCallback(() => {

        setBackground("#F9F9F9")
    }, [])

    const pressOut = useCallback(() => {
        setBackground("white")
    }, [])

    const navigate = () => {
        Haptics.selectionAsync()
        navigation.navigate('detail', {
            url: blog.url,
            title: blog.title
        });
    }

    return (
        <Pressable onPressIn={() => press()} onPressOut={() => pressOut()} onPress={navigate}>
            <View style={{ ...styles.item, backgroundColor: background }}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemTitleText} >{blog.title}</Text>
                    <View style={styles.itemChild}>
                        <Text style={styles.itemChildBotomText}>Id: {blog.objectID}</Text>
                        <Text style={styles.itemChildBotomText}>Points: {blog.points}</Text>
                    </View>
                </View>
                <View style={styles.itemCompanion} >
                    <Ionicons name="chevron-forward" size={32} color="#aeaeb2" />
                </View>
            </View>
        </Pressable>
    );
}
