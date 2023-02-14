import React, { useLayoutEffect } from 'react'
import { View, StatusBar, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Library({ navigation }) {
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

    const videos = [
        {
            title: 'Hamayoun Saeed in Mazaaq Raat',
            channel: 'Mazaaq Raat Show',
            video: require('../assets/images/mazaaq-raat-video.jpg'),
            time: '4:12'
        },
        {
            title: 'Me Kar Sakta Tha | Almidrar Institute',
            channel: 'Almidrar Institute',
            video: require('../assets/images/almidrar-video.jpg'),
            time: '5:39'
        },
        {
            title: 'Kashmir Paradise on Earth | Ukhano',
            channel: 'Ukhano',
            video: require('../assets/images/ukhano-video.jpg'),
            time: '10:01'
        },
        {
            title: 'Pocket Money Nikal Ata Hai ',
            channel: 'Nauman Ali Khan',
            video: require('../assets/images/nauman-video.jpg'),
            time: '2:44'
        },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#0d0d0d' }}>
            <View style={{ flex: 0.08, flexDirection: 'row' }}>
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                    <MaterialCommunityIcons name='history' color='white' size={40} />
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10 }}>History</Text>
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ fontSize: 18, color: '#2347a1', marginRight: 22 }}>View all</Text>
                </View>
            </View>
            <View style={{ flex: 0.25, borderBottomWidth: 0.2, paddingBottom: 3, borderBottomColor: 'white' }}>
                <FlatList
                    data={videos}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ flex: 0.4, width: 190, height: 190, marginHorizontal: 7, }}>
                            <View style={{ flex: 0.45, marginVertical: 2, alignItems: 'center', }}>
                                <Image source={item.video} style={{ width: 180, height: 90 }} />
                                <Text style={{ position: 'absolute', bottom: 5, color: 'white', right: 15 }}>{item.time}</Text>
                            </View>
                            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', }}>
                                <View style={{ flex: 0.9 }}>
                                    <Text style={{ fontSize: 16, marginLeft: 3, marginTop: 6, color: 'white' }}>{item.title}</Text>
                                    <Text style={{ fontSize: 12, marginTop: 3, color: 'lightgrey', marginLeft: 3 }}>{item.channel}</Text>
                                </View>
                                <View style={{ flex: 0.08, paddingRight: 10 }}>
                                    <Entypo name='dots-three-vertical' style={{ marginRight: -5, marginTop: 14 }} size={20} color={'white'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={{ flex: 0.25,justifyContent:'center',borderBottomColor:'white',borderBottomWidth:0.3 }}>
                <View style={{ flexDirection: 'row',alignItems:'flex-end'}}>
                    <View style={styles.left}>
                        <Octicons name='video' size={25} color={'white'} />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.text1}>Your videos</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <View style={styles.left}>
                        <MaterialCommunityIcons name='download' size={25} color={'white'} />
                    </View>
                    <View style={[styles.right,{marginTop:5}]}>
                        <Text style={styles.text1}>Downloads</Text>
                        <Text style={{ color: 'lightgrey' }}>100 videos</Text>
                    </View>
                    <View style={{position:'absolute',right:20}}>
                        <Ionicons name='ios-checkmark-done-circle' color="white" size={25} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.left}>
                        <MaterialIcons name='local-movies' size={25} color={'white'} />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.text1}>Your videos</Text>
                    </View>
                </View>
            </View>

            <View style={{flex:0.42,backgroundColor:'green'}}>
                <View>
                    <View>
                        <Text>Playlists</Text>
                        <Dropdown 
                            data={options}
                        />
                    </View>
                </View>
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
    },
    text1: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
    },
    left:{
        marginLeft:20,
        marginRight:30,
        marginVertical:8
    },
    right:{
        fontSize:18,
        marginVertical:8
    }

})