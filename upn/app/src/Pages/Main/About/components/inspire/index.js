import React from "react";
import { View, Text, ScrollView, StyleSheet  } from 'react-native';
import { Avatar } from 'react-native-paper';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { Tooltip } from "e-ui-react-native";
import Stories from '@StaticData/en/inspire-stories.json';

const Inspire = (props) =>{
    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}>
        <Text style={[InspireStyle.mainTitle, InspireStyle.textCenter, InspireStyle.mbot15p]}>Success Stories of UPSC Rankers</Text>
        {Stories?.data?.map((story, index)=>{
         return (<View key={index} style={InspireStyle.rankerContainer}>
          <View style={{  flex:1, flexDirection:'row' }}>
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
                    <Tooltip title="This a Goofd bOY SAYING HelloWorld">
                    <Text style={[InspireStyle.fs14, InspireStyle.bold]}>{story?.location}</Text>
                    </Tooltip>
                </View>
                {(story?.exam==='CSE' && (<View style={InspireStyle.rankerRanking}>
                    <Tooltip title="All India Rank (AIR)" timeout={3000}>
                        <Text style={[InspireStyle.fs14, InspireStyle.greyColor, InspireStyle.borderDashed ]}>AIR</Text>
                    </Tooltip> 
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}> - {story?.rank}, </Text> 
                    <Tooltip title="Union Public Service Comission (UPSC) - Civil Service Examination (CSE)" timeout={3000}>
                        <Text style={[InspireStyle.fs14, InspireStyle.greyColor, , InspireStyle.borderDashed]}>UPSC - CSE </Text>
                    </Tooltip>
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>Batch {story?.batch}</Text>
                </View>))}
                <View style={InspireStyle.rankerRanking}>
                    <Text style={[InspireStyle.fs14, InspireStyle.greyColor]}>{story?.attempt} Attempt ({story?.medium} Medium) </Text>
                </View>
            </View>
        </View>
        <View style={InspireStyle.mtop15p}>
            <Text style={{ fontSize:15, fontWeight:'bold', color:'#333',marginBottom:8 }}>About the Journey:</Text>
            {story?.story?.map((s, i)=>{
                return (<Text key={i} style={{ lineHeight: 22, color:'#111' }}>{s}</Text>);
            })}
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
 borderDashed: { borderBottomWidth:1, borderStyle:'dashed' },
 mtop15p: { marginTop:15 },
 mbot15p: { marginBottom:15 },
 textCenter: { textAlign: 'center' },
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 },
 rankerContainer:{ marginBottom:15, borderWidth:1, borderColor:'#ddd', padding:15, borderRadius:8 },
 rankerImg:{ width:'25%', alignItems:'center' },
 rankerDetails:{ width:'75%', paddingLeft: 15 },
 rankerTitleView:{ paddingBottom:3, flexDirection:'row' },
 rankerTitle:{ fontSize: 16, fontWeight:'bold', color:'#000' },
 rankerLocation:{ paddingBottom:4, flexDirection:'row' },
 rankerRanking:{ paddingBottom:2, flexDirection:'row' }
});

export default Inspire;