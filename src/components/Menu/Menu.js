import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient';
export default function Menu() {
    const list = [
        {
            id: 1,
            name: 'One piece',
            star: 5
        },
        {
            id: 2,
            name: 'Dragon Super',
            star: 5
        },
        {
            id: 3,
            name: 'Pokemom',
            star: 4
        },
        {
            id: 4,
            name: 'Naruto',
            star: 3
        }

    ]
    const showStart = (star) => {
        if (star === 5) {
            return (
                <View style={styles.starBook}>
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                    />
                    <FontAwesome
                        name="star"
                        size={15}
                        color={'#c9cc1f'}
                    />
                </View>
            )
        } else {
            if (star === 4) {
                return (
                    <View style={styles.starBook}>
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                        />
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                        />
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                        />
                        <FontAwesome
                            name="star"
                            size={15}
                            color={'#c9cc1f'}
                        />
                        <FontAwesome
                            name="star-o"
                            size={15}
                            color={'#c9cc1f'}
                        />
                    </View>
                )
            } else {
                if (star === 3) {
                    return (
                        <View style={styles.starBook}>
                            <FontAwesome
                                name="star"
                                size={15}
                                color={'#c9cc1f'}
                            />
                            <FontAwesome
                                name="star"
                                size={15}
                                color={'#c9cc1f'}
                            />
                            <FontAwesome
                                name="star"
                                size={15}
                                color={'#c9cc1f'}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                            />
                            <FontAwesome
                                name="star-o"
                                size={15}
                                color={'#c9cc1f'}
                            />
                        </View>
                    )
                } else {
                    if (star === 2) {
                        return (
                            <View style={styles.starBook}>
                                <FontAwesome
                                    name="star"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                            </View>
                        )
                    } else {
                        return (
                            <View style={styles.starBook}>
                                <FontAwesome
                                    name="star"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                                <FontAwesome
                                    name="star-o"
                                    size={15}
                                    color={'#c9cc1f'}
                                />
                            </View>
                        )
                    }
                }
            }
        }
    }
    return (
        <View style={styles.containerFluid}>
            <LinearGradient
                style={styles.top}
                colors={['#284bad', '#0b136f']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.line} />
                <View style={[styles.line, { top: 130, left: -150 }]} />
                <View style={[styles.line, { top: 160, left: 0 }]} />
            </LinearGradient>
            <View style={styles.HeaderIcon}>
                <View styles={styles.IconMenu}>
                    <TouchableOpacity activeOpacity={0.3}>
                        <Feather
                            name="menu"
                            size={25}
                            color={'#9a9a9a'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputSearch}>
                    <TextInput
                        name="search"
                        placeholder="Search"
                    ></TextInput>
                    <AntDesign
                        name="search1"
                        size={25}
                        color={'#ababab'}
                        style={{ paddingRight: 10 }}
                    />
                </View>
                <View style={styles.IconBell}>
                    <TouchableOpacity activeOpacity={0.3}>
                        <Feather
                            name="bell"
                            size={25}
                            color={'#9a9a9a'}
                        >
                        </Feather>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerSwiper}>
                <Swiper autoplay={true} autoplayTimeout={5}
                    style={styles.wrapper}
                    dot={
                        <View
                            style={{
                                backgroundColor: 'rgba(255,255,255,.3)',
                                width: 10,
                                height: 10,
                                borderRadius: 7,
                            }}
                        />
                    }
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#fff',
                                width: 10,
                                height: 10,
                                borderRadius: 7,

                            }}
                        />
                    }
                    paginationStyle={{
                        bottom: 10
                    }}

                >
                    <View style={styles.slide1}>
                        <Image
                            style={styles.image}
                            source={require('../../public/img/slider_1559211185.jpg')}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            style={styles.image}
                            source={require('../../public/img/slider_1559213426.jpg')}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            style={styles.image}
                            source={require('../../public/img/slider_1559213426.jpg')}
                        />
                    </View>
                </Swiper>
            </View>
            <Container style={styles.tab}>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Trending">
                        <View style={styles.containerListBook}>
                            <FlatList data={list}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.listBook}>
                                            <Image
                                                style={styles.listBookImg}
                                                source={require('../../public/img/anime.jpg')}
                                            >
                                            </Image>
                                            <Text style={styles.nameBook}>{item.name}</Text>
                                            <View style={styles.starBookContainer}>
                                                {showStart(item.star)}
                                            </View>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </Tab>
                    <Tab heading="Anime">
                        <View style={styles.containerListBook}>
                            <FlatList data={list}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.listBook}>
                                            <Image
                                                style={styles.listBookImg}
                                                source={require('../../public/img/anime.jpg')}
                                            >
                                            </Image>
                                            <Text style={styles.nameBook}>{item.name}</Text>
                                            <View style={styles.starBookContainer}>
                                                {showStart(item.star)}
                                            </View>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </Tab>
                    <Tab heading="Top Free">
                        <View style={styles.containerListBook}>
                            <FlatList data={list}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.listBook}>
                                            <Image
                                                style={styles.listBookImg}
                                                source={require('../../public/img/anime.jpg')}
                                            >
                                            </Image>
                                            <Text style={styles.nameBook}>{item.name}</Text>
                                            <View style={styles.starBookContainer}>
                                                {showStart(item.star)}
                                            </View>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </Tab>
                    <Tab heading="Top Paid">
                        <View style={styles.containerListBook}>
                            <FlatList data={list}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.listBook}>
                                            <Image
                                                style={styles.listBookImg}
                                                source={require('../../public/img/anime.jpg')}
                                            >
                                            </Image>
                                            <Text style={styles.nameBook}>{item.name}</Text>
                                            <View style={styles.starBookContainer}>
                                                {showStart(item.star)}
                                            </View>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </Tab>
                    <Tab heading="Top Manga">
                        <View style={styles.containerListBook}>
                            <FlatList data={list}
                                numColumns={2}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.listBook}>
                                            <Image
                                                style={styles.listBookImg}
                                                source={require('../../public/img/anime.jpg')}
                                            >
                                            </Image>
                                            <Text style={styles.nameBook}>{item.name}</Text>
                                            <View style={styles.starBookContainer}>
                                                {showStart(item.star)}
                                            </View>
                                        </View>
                                    )
                                }}
                            ></FlatList>
                        </View>
                    </Tab>
                </Tabs>
            </Container>
        </View>

    )
}
const window = Dimensions.get("window")
const styles = StyleSheet.create({
    containerFluid: {
        flex: 1,
        paddingHorizontal: 15
    },
    line: {
        position: 'absolute',
        width: window.width,
        top: 105,
        left: -280,
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.1)',
        transform: [
            {
                rotate: '-35deg',
            },
        ],
        borderRadius: 60,
    },
    top: {
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#284bad',
        position: 'absolute',
        width: window.width,
        height: window.height / 4,
    },
    HeaderIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    IconMenu: {
        justifyContent: 'flex-start',
    },
    inputSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '70%',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 0.2,
        elevation: 5,
    },
    IconBell: {

    },
    slide1: {
        flex: 1,
    },
    slide2: {
        flex: 1,
    },
    slide3: {
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    containerSwiper: {
        flex: 0.3,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    tab: {
        marginTop: 20,
    },
    containerListBook: {
        paddingHorizontal: 5,
    },
    listBook: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: window.width / 2,
        height: window.width / 2,
        paddingVertical: 120,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        margin: 5
    },
    nameBook: {
        color: '#c9cc1f'
    },
    listBookImg: {
        width: '100%',
        height: window.width / 2,
        borderRadius: 5,
    },
    starBookContainer: {
        paddingVertical: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    starBook: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    }
})







