import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Badge } from '@AppComponent/Badge/index.js';
import { TimeAgo } from '@AppUtils/DateTime.js';
import { Icon } from "e-ui-react-native";
import Page from '@AppUtils/Page.js';

const subjectsData=[{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVyxuK4tqxPS9iloMruV0yZLq9KqjoxXmWw&s",
  subject:"Agriculture",
  chapters:"18"
},{
  img:"https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/04/02125952/animal-husbandry.jpg",
  subject:"Animal Husbandry and Veterinary Science",
  chapters:"18"
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRZri3_3UfuSQJo1Xs05aXDsVjPsLO-DGgw&s",
  subject:"Economics",
  chapters:"18"
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoEajTfdX6ZGoijyj6TML0yLYxQp2PpZECA&s",
  subject:"Anthropology",
  chapters:"18"
},{
  img:"https://simplysociology.com/wp-content/uploads/2023/02/sociology-1024x576.jpg",
  subject:"Sociology",
  chapters:"18"
}];
const newsData=[{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_HINDU',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_INDIAN_EXPRESS',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'BUSINESS_STANDARD',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_ECONOMIC_TIMES',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_TIMES_OF_INDIA',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_HINDU',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_INDIAN_EXPRESS',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'BUSINESS_STANDARD',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_ECONOMIC_TIMES',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
},{
  title:'Bangladesh protests LIVE Updates: Army Chief is to address nation; total internet shutdown as protesters march to Dhaka.',
  paper:'THE_TIMES_OF_INDIA',
  desc:'A large number of students hit the streets on August 5 as part of their "Long March to Dhaka"',
  createdOn:'2024-08-05 13:23'
}];
const Explore = () =>{
  const HeaderTitle = ({ data }) =>{
    return (<View style={styles.row}>
      {data?.icon && <View style={[styles.padRight3, { justifyContent:'center' }]}>
      <Icon type={data?.icon?.type} name={data?.icon?.name} size={data?.icon?.size} color={data?.icon?.color} />
      </View>}
      <View style={styles.padLeft5}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.subTitle}>{data?.subTitle}</Text>
      </View>
    </View>);
  };
  const Subject = ({ data })=>{
    const subName = data?.subject;
    const displaySubject = (subName?.length>12)?subName.substr(0,12)+'...':subName;
    return (<View style={styles.subjectView}>
      <TouchableOpacity>
      <View style={styles.subjectImgView}>
        <Image style={styles.subjectImg} source={{ uri: data?.img }} />
      </View>
      <View style={styles.subjectTextView}>
        <Text style={styles.subjectTitle}>{displaySubject}</Text>
        <Text style={styles.subjectChapters}>{data?.chapters} Chapters</Text>
      </View>
      </TouchableOpacity>
    </View>);
  };
  const ExploreHeaderSection = ()=>{
    return (<View style={styles.exploreTitleView}>
      <View style={styles.exploreHeader}>
        <HeaderTitle data={{ 
       //   icon:{ type:'MaterialCommunityIcons', name:'cursor-default-gesture', size:35, color:'#333' },
          title:'Our Study Topics',
          subTitle: 'For UPSC Examinations'
        }} />
      </View>
      <View style={styles.inviteFriendsView1}>
        <TouchableOpacity>
        <View style={styles.inviteFriendsView2}>
          <Icon type="AntDesign" name="pluscircle" size={15} color="#df0d55" />
          <Text style={styles.inviteFriendsText}>Invite Friends</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>);
  };
  const ExploreSubjectSection = () =>{
    return (<View>
      <View style={{ marginLeft:5, marginRight:6 }}>
      <ScrollView horizontal={true}>
        <View style={[styles.subjectGroupView]}>
          {subjectsData?.map((d,i)=>{
            return (<Subject key={i} data={d} />);
          })}
        </View>
      </ScrollView>
      </View>
    </View>);
  };
  const News = ({ data }) =>{
    return (<TouchableOpacity>
      <View style={styles.newsView}>
          <View>
            <Text style={styles.newsTitle}>{data?.title}</Text>
          </View>
          <View style={styles.newsSubView}>
            <View style={styles.newsImgView}> 
              {data?.paper==='THE_HINDU' && <Image style={styles.newsImgHindu} source={require('@Assets/news/the-hindu.png')} />}
              {data?.paper==='THE_INDIAN_EXPRESS' && <Image style={styles.newsImgTIE} source={require('@Assets/news/the-indian-express.png')} />}
              {data?.paper==='BUSINESS_STANDARD' && <Image style={styles.newsImgBS} source={require('@Assets/news/business-standard.png')} />}
              {data?.paper==='THE_ECONOMIC_TIMES' && <Image style={styles.newsImgET} source={require('@Assets/news/economic-times.png')} />}
              {data?.paper==='THE_TIMES_OF_INDIA' && <Image style={styles.newsImgTOI} source={require('@Assets/news/the-times-of-india.png')} />}
              
            </View>
            <View style={styles.newsDescView}>
              <Text style={styles.newsDescText}>{data?.desc}</Text>
            </View>
          </View>
          <View style={styles.newsTimelineView}>
            <Text style={styles.newsTimeline}>{TimeAgo(data?.createdOn)}</Text>
          </View>
      </View>
    </TouchableOpacity>);
  };
  const ExploreNewsSection = ()=>{
    return (<View style={[styles.padLeft10, styles.padRight10, styles.padTop20]}>
      <HeaderTitle data={{ title:'Trending Current Affairs', subTitle: 'Stay updated for UPSC Examinations' }} />
      <View style={[styles.padLeft5, styles.padRight5]}>
       {newsData?.map((d,i)=><News key={i} data={d} />)}
      </View>
    </View>);
  };
  const neighbours = [{ country: 'Afghanistan', flag: require('@Assets/maps/afghanistan.jpg') },
    { country: 'Pakistan', flag: require('@Assets/maps/pakistan.jpg') },
    { country: 'China', flag: require('@Assets/maps/china.jpg') },
    { country: 'Nepal', flag: require('@Assets/maps/nepal.jpg') },
    { country: 'Bhutan', flag: require('@Assets/maps/bhutan.jpg') },
    { country: 'Myanmar', flag: require('@Assets/maps/myanmar.jpg') },
    { country: 'Bangladesh', flag: require('@Assets/maps/bangladesh.jpg') },
    { country: 'Sri Lanka', flag: require('@Assets/maps/srilanka.jpg') },
    { country: 'Maldives', flag: require('@Assets/maps/maldives.jpg') }
  ];
  const ExploreNeighbourSection = () =>{
    return (<View style={styles.neighbourSectionView}>
      <HeaderTitle data={{ title:'India & its Neighbour Countries', 
          subTitle: 'Historical, Economic and Geopolitical Relationships' }} />
      <View style={styles.neighbourView1}>
        {neighbours?.map((neighbour,index)=>{
          return (<View key={index}>
            <TouchableOpacity>
          <View style={styles.neighbourView2}>
            <Image source={neighbour?.flag} style={styles.flagImg} />
            <Text style={styles.flagText}>{neighbour?.country}</Text>
          </View>
          </TouchableOpacity>
        </View>);
        })}
      </View>
    </View>);
  };
  return (<Page backgroundColor="#df0d55" title="Start Learning">
    <ScrollView style={styles.scrollViewPage}>
      <ExploreHeaderSection />
      <ExploreSubjectSection />
      <ExploreNeighbourSection />
      <ExploreNewsSection />
    </ScrollView>
  </Page>);
};

const styles = StyleSheet.create({
  scrollViewPage:{  marginTop:8, marginLeft:5, marginBottom:6 },
  row:{ flexDirection:'row' },
  padRight3:{ paddingRight:3 },
  padLeft5:{ paddingLeft:5 },
  padLeft10:{ paddingLeft:10 },
  padRight5:{ paddingRight:5 },
  padRight10:{ paddingRight:10 },
  padTop20:{ paddingTop:20 },
  title:{ fontSize:18, color:'#333', fontWeight:'bold' },
  subTitle:{ fontSize:12, color:'#777', paddingTop:2 },
  subjectView:{ width:118 },
  subjectImgView:{ alignItems:'center' },
  subjectImg:{ width:90, height:90, borderRadius:50, borderWidth:1, borderColor:'#000' },
  subjectTextView:{ paddingTop:3, alignItems:'center' },
  subjectTitle:{ fontSize:14, color:'#333', fontWeight:'bold', textAlign:'center', flexWrap:'wrap' },
  subjectChapters:{ fontSize:12, color:'#333' },
  subjectGroupView:{ flexDirection:'row', marginTop:5, marginLeft:-5 },
  exploreTitleView:{ flexDirection:'row', paddingLeft:15, paddingRight:10, paddingTop:10, paddingBottom:10 },
  exploreHeader:{ width:'65%' },
  inviteFriendsView1:{ justifyContent:'center', alignItems:'flex-end', width:'35%', paddingRight:15 },
  inviteFriendsView2:{ flexDirection:'row', borderWidth:1, borderColor:'#df0d55', borderRadius:6, padding:5 },
  inviteFriendsText:{ paddingLeft:6, fontSize:11, color:'#df0d55', fontWeight:'bold' },
  newsView:{ marginTop:10, padding:10, borderWidth:1, borderRadius:6, borderColor:'#ccc', backgroundColor:'#fbf9f9' },
  newsTitle:{ fontSize:16, fontWeight:'bold', lineHeight:22, color:'#333' },
  newsSubView:{ flexDirection:'row', paddingTop:5 },
  newsImgView:{ width:'35%', justifyContent:'center' },
  newsImgHindu:{ width:100, height:40 },
  newsImgTIE:{ width:100, height:50 },
  newsImgBS:{ width:100, height:50 },
  newsImgET:{ width:104, height:49 },
  newsImgTOI:{ width:100, height:36 },
  newsDescView:{ width:'75%', flex:1 },
  newsDescText:{ lineHeight:21, fontSize:14, flexWrap:'wrap' },
  newsTimelineView:{ alignItems:'flex-end', paddingTop:3 },
  newsTimeline:{ color:'#aaa', fontSize:13 },
  neighbourSectionView:{ marginLeft:10, marginTop:30 },
  neighbourView1:{ flexDirection:'row', flexWrap:'wrap', paddingTop:5, paddingLeft:5, paddingBottom:15 },
  neighbourView2:{ paddingTop:10, paddingRight:8 },
  flagImg:{ width:104, height:75, borderRadius:8, borderWidth:1, borderColor:'#000' },
  flagText:{ padding:5, textAlign:'center', color:'#333', fontWeight:'bold' }
});

export default Explore;