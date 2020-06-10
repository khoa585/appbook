import React, { useEffect, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    Button,
    ActivityIndicator
} from 'react-native';
import showStart from '../../commons/index'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { feachDetail } from '../../api/products'
export default function Detail({ route }) {
    const { _id } = route.params;
    const [state, setState] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const settime = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        const feachDetails = async () => {
            const result = await feachDetail(_id)
            if (result.data?.data) {
                setState(result.data?.data)
            }
        }
        feachDetails()
        return () => {
            clearTimeout(settime)
        }
    }, [])
    if (isLoading) {
        return (
            <View style={styles.containers}>
                <ActivityIndicator
                    animating={isLoading}
                    color='#bc2b78'
                    size="large"
                    style={styles.activityIndicator} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerDetail}>
                <View style={styles.ImgDetail}>
                    <Image
                        style={styles.listBookImg}
                        source={{ uri: `${!state ? '..' : state.images}` }}
                    >
                    </Image>
                </View>
                <View style={styles.contaiDeatail}>
                    <View>
                        <View style={styles.nameBook}>
                            <Text style={styles.name}>{!state ? '' : state.name}</Text>
                        </View>
                        <View style={styles.starBook}>
                            <View style={styles.book}>
                                {showStart(5, 5)}
                            </View>
                        </View>
                    </View>
                    <View style={styles.tym}>
                        <View><Text style={styles.priceBook}>FREE</Text></View>
                        <View>
                            <AntDesign
                                name="hearto"
                                size={20}
                            >
                            </AntDesign>
                        </View>
                        <View>
                            <Entypo
                                name="share"
                                size={20}
                            >
                            </Entypo>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.ButtonRead}>
                <Button
                    title="Learn More"
                    color="#d90429"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    )
}
const window = Dimensions.get("window")
const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    containerDetail: {
        flexDirection: 'row'
    },
    ImgDetail: {
        width: window.width / 2.5,
        height: window.width / 2,
    },
    listBookImg: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    contaiDeatail: {
        width: window.width / 2,
        height: window.width / 2,
        paddingLeft: 15,
        justifyContent: 'space-around'
    },
    name: {
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold'
    },
    starBook: {
        paddingVertical: 10,
    },
    priceBook: {
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#d90429'
    },
    tym: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    book: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    ButtonRead: {
        justifyContent: 'center',
        paddingVertical: 25,
    }
})