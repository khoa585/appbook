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
    FlatList,
    ActivityIndicator,
} from 'react-native';
import showStart from '../../commons/index'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { feachDetail, feachDetailChap } from '../../api/products'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Moment from 'react-moment';
export default function Detail({ route }) {
    const { _id } = route.params;
    const [state, setState] = useState()
    const [tab, setTab] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const settime = setTimeout(() => {
            setIsLoading(false)
        }, 900)
        const feachDetails = async () => {
            const [resultDataDetail, resultDataDetailChap] = await Promise.all([feachDetail(_id), feachDetailChap(_id, 1)])
            if (resultDataDetail.data?.data) {
                setState(
                    {
                        ...state,
                        dataDetail: resultDataDetail.data?.data,
                        dataChap: resultDataDetailChap.data?.data
                    }
                )
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
            <View style={styles.nameBook}>
                <Text style={styles.name}>{!state ? '' : state.dataDetail.name}</Text>
            </View>
            <View style={styles.containerDetail}>
                <View style={styles.ImgDetail}>
                    <Image
                        style={styles.listBookImg}
                        source={{ uri: `${!state ? '..' : state.dataDetail.images}` }}
                    >
                    </Image>
                </View>
                <View style={styles.contaiDeatail}>
                    <View>
                        <View>
                            <Text style={styles.nameauthor}>{!state ? '' : state.dataDetail.author}</Text>
                        </View>
                        <View style={styles.starBook}>
                            <View style={styles.book}>
                                {showStart(5, 5)}
                            </View>
                        </View>
                    </View>
                    <View style={styles.tym}>
                        <View style={styles.viewers}>
                            <EvilIcons
                                name="eye"
                                size={25}
                                color={'#000'}
                            >
                            </EvilIcons>
                            <Text style={{ color: '#000', fontSize: 12 }}>{!state ? '' : state.dataDetail.views}</Text>
                        </View>
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
                <View style={{ width: '50%' }}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={() => setTab(0)}
                        style={[styles.buttons, tab === 0 && { borderBottomColor: "#ED719E" }]}>
                        <Text style={styles.buttonText}>Danh sách chương</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%' }}>
                    <TouchableOpacity
                        activeOpacity={0.3}
                        onPress={() => setTab(1)}
                        style={[styles.buttons, tab === 1 && { borderBottomColor: "#ED719E" }]}>
                        <Text style={styles.buttonText}>Giới Thiệu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {
                    tab === 0 &&
                    <FlatList data={!state ? '' : state.dataChap}
                        keyExtractor={(item) => `${item._id}`}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.chapBook}>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text> <Moment style={{ color: '#000' }} format="DD/MM/YYYY" element={Text}>{item.createdAt}</Moment></Text>
                                    </View>
                                </View>
                            )
                        }}
                    >
                    </FlatList>
                }
                {
                    tab === 1 && <Text>s</Text>
                }
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
        paddingVertical: 15
    },
    containerDetail: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    ImgDetail: {
        width: window.width / 2.5,
        height: window.width / 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
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
        fontWeight: 'bold',
        color: '#d90429'
    },
    starBook: {
        paddingVertical: 10,
    },
    viewers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    nameBook: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    nameauthor: {
        color: '#000'
    },
    ButtonRead: {
        flexDirection: 'row',
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
        padding: 15,
        borderBottomColor: '#F4C1ED',
        borderBottomWidth: 2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8F9090',
    },
    chapBook: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        padding: 15,
        borderBottomColor: '#F4C1ED',
    }
})