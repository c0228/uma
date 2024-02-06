import { StyleSheet } from "react-native";

const GLOBAL_TMPL_COLOR2_MAX = '#bbb';
const GLOBAL_TMPL_COLOR2_MED = '#ddd';
const GLOBAL_TMPL_COLOR2_MIN = '#fff';
const GLOBAL_TMPL_COLOR1_MAX = '#532c97';

const TabNavigationStyles = StyleSheet.create({
 tabBarLabelStyle: { color: GLOBAL_TMPL_COLOR2_MAX, fontSize:14, fontWeight:'bold' },
 tabBarBadgeStyle: { marginLeft:4, padding:2, color: GLOBAL_TMPL_COLOR2_MED, backgroundColor: GLOBAL_TMPL_COLOR2_MIN },
 tabBarBadgeActiveStyle: { marginLeft:4, padding:0.2,fontSize:11,  backgroundColor: GLOBAL_TMPL_COLOR1_MAX }
});

export default TabNavigationStyles;