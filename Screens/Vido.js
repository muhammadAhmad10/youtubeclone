import Video from 'react-native-video';
import video from '../assets/images/video1.mp4';

export const Vido = (props) => {
    return (
        <Video  
            source={props.video}
            paused={true}  
            controls={true}                  
            style={{flex:1,width:500,height:770}}  
            repeat={true} 
            resizeMode="cover" 
                 
        />
    )
}