/* import React from "react";
import { View, Text, ScrollView, StyleSheet  } from 'react-native';
import { Avatar, IconButton, Tooltip } from 'react-native-paper';
import { HamburgerIcon } from './../../../../Navigation/Drawer/index.js';
import { Order, Li } from "e-ui-react-native";

const stories = [{
    "name":"Govind Jaiswal",
    "img": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Prime_Minister_Modi_in_July_2021.jpg",
    "location":"Varanasi, Uttar Pradesh",
    "attempt": "1st",
    "medium": "Hindi",
    "exam":"CSE",
    "batch":"2006",
    "rank":"48",
    "story":["Govind Jaiswal's journey is an inspiring tale of triumph against all odds. Born to Narayan, a humble \
    rickshaw puller in Varanasi, the weight of his family's dreams rested squarely on Govind's shoulders. Despite the \
    meager earnings from the rickshaw business, Govind harbored a lofty ambition—to become an IAS officer.",
    "From his early days of schooling to his college years, Govind remained resolute in his pursuit of excellence. However, \
    the challenges seemed insurmountable. Living in a one-room dwelling plagued by frequent power cuts, concentrating on \
    studies was a constant struggle. But Govind's determination remained unshaken.",
    "Supported by his family's unwavering belief in his potential, Govind made the courageous decision to move to Delhi for \
    UPSC-CSE coaching. In the bustling capital, he faced new challenges. To save every penny, Govind took up tutoring jobs \
    in mathematics and often sacrificed meals. His resolve was unwavering, driven by the realization that failure was not \
    an option.",
    "In Govind's own words, \"My circumstances and hardships left me with no other option. I couldn’t settle for lower \
    government jobs or start a business as I had no capital. My only option was to work hard on my studies.\" With every \
    setback, Govind only grew more determined, fueled by the fire of his ambition.",
    "In 2006, Govind's perseverance bore fruit. Against all odds, he secured the remarkable 48th rank in the UPSC civil \
    services exam. His achievement was not just personal; it was a testament to the power of resilience and hard work. \
    Govind's success not only transformed his own life but also uplifted the hopes of his entire family.",
    "Govind Jaiswal's story is a beacon of hope for countless individuals facing similar adversities. It exemplifies how \
    with grit, determination, and unwavering commitment, one can defy the odds and achieve greatness. From the narrow \
    lanes of Varanasi to the halls of success, Govind's journey inspires us all to dream big and persevere relentlessly \
    until we reach our goals."]
}];

const Inspire = (props) =>{
    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}>
        <Text style={[InspireStyle.mainTitle, InspireStyle.textCenter, InspireStyle.mbot15p]}>Success Stories of UPSC Rankers</Text>
        {stories?.map((story, index)=>{
         return (<View key={index} style={InspireStyle.rankerContainer}>
            <View style={InspireStyle.rankerImg}>
                {story?.img && <Avatar.Image 
                    source={{uri: story?.img }} 
                    size={68} />}
            </View>
            <View style={InspireStyle.rankerDetails}>
                <View style={InspireStyle.rankerTitleView}>
                    <Text style={InspireStyle.rankerTitle}>{story?.name}</Text>
                </View>
                <View style={InspireStyle.rankerLocation}>
                    <Text style={InspireStyle.fs14}>{story?.location}</Text>
                </View>
                {(story?.exam==='CSE' && (<View style={InspireStyle.rankerRanking}>
                    <Tooltip title="All India Rank (AIR)">
                    <View style={{ height: 48, alignSelf: 'stretch', justifyContent: 'center', backgroundColor: '#2196F3' }}>
                        <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>AIR</Text>
                        </View>
                    </Tooltip> 
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}> - {story?.rank}, </Text> 
                    <Tooltip title="Union Public Service Comission (UPSC) - Civil Service Examination (CSE)">
                        <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>UPSC - CSE </Text>
                    </Tooltip>
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>Batch {story?.batch}</Text>
                </View>))}
                <View style={InspireStyle.rankerRanking}>
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>{story?.attempt} Attempt ({story?.medium} Medium) </Text>
                </View>
            </View>
        </View>);
        })}
    </ScrollView>
</View>);
};

const InspireStyle = StyleSheet.create({ 
 fs14:{ fontSize: 14 },
 greyColor: { color:'#333' },
 bold:{ fontWeight: 'bold' },
 mtop15p: { marginTop:15 },
 mbot15p: { marginBottom:15 },
 textCenter: { textAlign: 'center' },
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
 rankerContainer:{ marginBottom:15, flex:1, flexDirection:'row', borderWidth:1, borderColor:'#ddd', padding:15, borderRadius:8 },
 rankerImg:{ width:'25%', alignItems:'center' },
 rankerDetails:{ width:'75%', paddingLeft: 15 },
 rankerTitleView:{ paddingBottom:3, flexDirection:'row' },
 rankerTitle:{ fontSize: 16, fontWeight:'bold', color:'#000' },
 rankerLocation:{ paddingBottom:4, flexDirection:'row' },
 rankerRanking:{ paddingBottom:2, flexDirection:'row' }
});

export default Inspire;
*/