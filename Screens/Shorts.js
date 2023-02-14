import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RN1 from '../assets/images/RN1.mp4';
import RN2 from '../assets/images/RN2.mp4';
import TF from '../assets/images/TF.mp4'
import video1 from '../assets/images/video1.mp4'


import { Vido } from './Vido';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Shorts() {
    const shortVids = [
        {
            name: 'React Native - Google Pay Clone',
            likes: '49',
            dislike: '1',
            comment: '3',
            image: require('../assets/images/profile.jpg'),
            channel: 'KarthikDev_',
            video: RN1
        },
        {
            name: 'Tabish Hashmi vs Fahad Mustafa Funny News',
            likes: '354',
            dislike: '1',
            comment: '1',
            image: require('../assets/images/profile.jpg'),
            channel: 'yousaftventertainment',
            video: TF
        },
        {
            name: 'PAKISTAN IS THE MOST UNDERRATED COUNTRY ON THE EARTH',
            likes: '175k',
            dislike: '1',
            comment: '11k',
            image: require('../assets/images/profile.jpg'),
            channel: 'JordanTually',
            video: video1
        },
        {
            name: 'React Native - Instagram Clone',
            likes: '90',
            dislike: '1',
            comment: '4',
            image: require('../assets/images/profile.jpg'),
            channel: 'KarthikDev_',
            video: RN2
        }
    ]
    return (
        <View style={{ flex: 1,backgroundColor:'#0d0d0d' }}>
            <View style={{ flex: 0.1, position: 'absolute', top: 0, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ fontSize: 22, marginLeft: 10, color: 'white', fontWeight: 'bold' }}>Shorts</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 0.5, justifyContent: 'space-around' }}>
                    <TouchableWithoutFeedback><Ionicons name='search' size={30} color={'white'} /></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback><MaterialCommunityIcons name='plus-box-outline' size={30} color={'white'} /></TouchableWithoutFeedback>
                    <TouchableWithoutFeedback><Entypo name='dots-three-vertical' size={30} color={'white'} /></TouchableWithoutFeedback>
                </View>
            </View>
            <View style={{ flex: 1, }}>
                <FlatList
                    data={shortVids}
                    renderItem={({ item }) => (
                        <View style={{ flex: 0.9, }}>
                            <View style={{ flex: 1 }}>
                                <Vido video={item.video} />
                            </View>
                            <View style={{flex:0.1,zIndex:1,position:'absolute',bottom:50,left:30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Image source={item.image} style={{width:50,height:50,borderRadius:50}} />
                                <Text style={{fontSize:18,color:'white',marginLeft:10}}>{item.channel}</Text>
                            </View>
                            <View style={{ flex: 0.1, position: 'absolute', zIndex: 1, bottom: 30, right: 0, marginRight: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                                    <AntDesign name='like1' color="white" size={30} />
                                    <Text style={{ fontSize: 16, color: 'white', marginTop: 5,fontWeight:'700' }}>{item.likes}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                                    <AntDesign name='dislike1' color="white" size={30} />
                                    <Text style={{ fontSize: 16, color: 'white', marginTop: 5,fontWeight:'700' }}>Dislike</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                                    <MaterialCommunityIcons name='message-reply-text' color="white" size={30} />
                                    <Text style={{ fontSize: 16, color: 'white', marginTop: 5,fontWeight:'700' }}>{item.comment}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                                    <MaterialCommunityIcons name='share' color="white" size={30} />
                                    <Text style={{ fontSize: 16, color: 'white', marginTop: 5 ,fontWeight:'700'  }}>Share</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 12 }}>
                                    <Ionicons name='md-arrow-redo-sharp' style={{transform:[{rotate: '90deg'}],marginLeft:20 }} color="white" size={30} />
                                    <Ionicons name='md-arrow-redo-sharp' style={{transform:[{rotate: '270deg'}],position: 'absolute',bottom:20,right:20}} color="white" size={30} />
                                    <Text style={{ fontSize: 16, color: 'white', marginTop: 5 ,fontWeight:'700'  }}>Remix</Text>
                                </View>

                            </View>
                        </View>

                    )}
                />
            </View>

            {/* <Vido video={RN1} /> */}
        </View>
    );
}
