import React from 'react'
import { View,StatusBar, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo'
import { useEffect, useState, useLayoutEffect } from 'react';

export default function Home({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#0d0d0d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100',

            },
            headerLeft: () => (
                <View
                    onPress={() => {
                    }}
                    style={{ marginBottom: 12, marginTop: 12, flexDirection: 'row', }}>
                    <Image source={require('../assets/images/youtube.png')} style={{ width: 35, height: 30, marginLeft: 13 }} />
                    <Text style={{ fontSize: 20, marginTop: 0, color: 'white', fontWeight: 'bold', marginLeft: 4 }}>YouTube</Text>
                </View>
            ),
            headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.headIconContainer}>
                        <Feather name='cast' size={25} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headIconContainer}>
                        <AntDesign name='bells' size={25} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.headIconContainer}>
                        <AntDesign name='search1' size={25} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.headIconContainer, { marginRight: 10 }]}>
                        <Image source={require('../assets/images/profile.jpg')} style={{ width: 33, height: 33, borderRadius: 50 }} />
                    </TouchableOpacity>

                </View>
            )
        });
    }, [navigation])

    const data = [
        {
            name: 'All'
        },
        {
            name: 'New to you'
        },
        {
            name: 'Music'
        },
        {
            name: 'Mixes'
        },
        {
            name: 'Reverberation'
        },
        {
            name: 'Game shows'
        },
        {
            name: 'Deep House'
        },
        {
            name: 'Sheikh'
        },
        {
            name: 'Comedy'
        },
        {
            name: 'Podcast'
        },
        {
            name: 'Motivation'
        },
        {
            name: 'Cricket'
        },
        {
            name: 'Computer Programming'
        },
        {
            name: 'Watched'
        },
        {
            name: 'Posts'
        },
    ]

    const videos = [
        {
            title: 'Hamayoun Saeed in Mazaaq Raat | Mazaaq Raat Show Official',
            channel: 'Mazaaq Raat Show Official',
            views: '24k views',
            uploadTime: '2 years ago',
            channelImage: require('../assets/images/mazaaq-raat.jpg'),
            video: require('../assets/images/mazaaq-raat-video.jpg')
        },
        {
            title: 'Me Kar Sakta Tha | Almidrar Institute',
            channel: 'Almidrar Institute',
            views: '10k views',
            uploadTime: '28 days ago',
            channelImage: require('../assets/images/almidrar.jpg'),
            video: require('../assets/images/almidrar-video.jpg')
        },
        {
            title: 'Kashmir Paradise on Earth | Ukhano',
            channel: 'Ukhano',
            views: '200k views',
            uploadTime: '1 year ago',
            channelImage: require('../assets/images/ukhano.jpg'),
            video: require('../assets/images/ukhano-video.jpg')
        },
        {
            title: 'Pocket Money Nikal Ata Hai | Nauman Ali Khan',
            channel: 'Nauman Ali Khan',
            views: '112k views',
            uploadTime: '3 years ago',
            channelImage: require('../assets/images/nauman.jpg'),
            video: require('../assets/images/nauman-video.jpg')
        },
    ]

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#0d0d0d'} />
            <View style={{ flex: 0.09, backgroundColor: '#0d0d0d', }}>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#1c1b1b', marginHorizontal: 7, borderRadius: 30, padding: 8, paddingHorizontal: 16, height: 45, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, color: 'white' }}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
            <View style={{ flex: 0.91, }}>
                <FlatList
                    data={videos}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <TouchableOpacity style={{ flex: 0.5, width: '100%'}}>
                                <View style={{ flex: 0.8, backgroundColor: 'pink' }}>
                                    <Image source={item.video} style={{ width: '100%', height: 250 }} />
                                </View>
                                <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: '#0d0d0d', paddingVertical: 10, justifyContent: 'center' }}>
                                    <View style={{ flex: 0.17, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={item.channelImage} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                    </View>
                                    <View style={{ flex: 0.78, }}>
                                        <View style={{ paddingLeft: 2, flex: 0.5, marginBottom: 3 }}>
                                            <Text style={{ fontSize: 16, color: 'white', marginLeft: 3 }}>{item.title}</Text>
                                        </View>
                                        <View style={{ paddingLeft: 2, flex: 0.5, flexDirection: 'row', flexWrap: 'wrap' }}>
                                            <Text style={styles.text}>{item.channel}</Text>
                                            <Text style={styles.text}>{item.views}</Text>
                                            <Text style={styles.text}>{item.uploadTime}</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.08, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Entypo name='dots-three-vertical' marginTop={6} size={20} color={'white'} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headIconContainer: {
        padding: 5,
        borderRadius: 50,
        marginHorizontal: 8
    },
    text: {
        fontSize: 12,
        color: '#6e6b6b',
        marginHorizontal: 5
    }

})