import { StyleSheet } from 'react-native';

const GLOBAL_TMPL_COLOR2_MED = '#ddd';
const GLOBAL_TMPL_COLOR2_MAX = '#bbb';
const GLOBAL_TMPL_COLOR1_MAX = '#532c97';

const DrawerStyles = StyleSheet.create({
 /** DrawerContent CSS */
 drawerContentView:{ flex:1 },
 userInfoSection: { paddingLeft:20 },
 title:{ fontSize:16, marginTop:3, fontWeight:'bold' },
 userType:{ fontWeight:'bold',alignSelf: 'flex-start',borderRadius:4, paddingLeft:8,paddingRight:8, 
    paddingTop:5,paddingBottom:5,backgroundColor:'#b50541', color:'#fff',fontSize:12,lineHeight:14 },
 bottomDrawerSection:{ marginBottom:15,borderTopColor:'#f4f4f4',borderTopWidth:1 },
 shortDesc:{fontSize:14, fontWeight:'bold',lineHeight:22, padding:8, backgroundColor: GLOBAL_TMPL_COLOR2_MED },
 shortDescSection: { paddingLeft:15, paddingRight:15, color: GLOBAL_TMPL_COLOR2_MAX  },

 /** DrawerHeader CSS */
 searchHeaderView:{ paddingLeft:5, paddingRight:8 },
 drawerHeaderView:{ backgroundColor:'#fff', padding:3, borderBottomWidth:1, borderColor:'#ddd' },
 drawerHamburgerView:{ paddingLeft:5 },
 searchIconView: { flex:1, justifyContent: 'center', alignItems:'flex-end', paddingRight:8},
 logoImageView: { flex:1, justifyContent: 'center', alignItems:'center', marginTop:5, marginBottom:5  },
 headerIcons:{ color: GLOBAL_TMPL_COLOR1_MAX },

});

export default DrawerStyles;