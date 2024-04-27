import React from "react";
import { View, Text } from "react-native";
import { Accordian } from "@AppComponent/Accordian/index.js";
import PreliminaryExam from "./components/CSE/Prelims/index.js";

const ExamSyllabus = ()=>{
 const SubjectTitle=({ index, title })=>{
  return (<View style={{ flexDirection:'row' }}>
  <View style={{ width:'9%' }}><Text style={{ fontSize:14, fontWeight:'bold', color:'#555',  lineHeight:22 }}>{index}. </Text></View>
  <View style={{ width:'91%' }}>
      <Text style={{ fontSize:14, fontWeight:'bold', color:'#555', lineHeight:22 }}>{title}</Text>
  </View>
  </View>);
 };
 return (<View>
  <PreliminaryExam />
  <Accordian id="AccordianExample" 
        data={[{ id:"Item#01", 
                title: (<SubjectTitle index="01" title="Agriculture" />), 
                component:"This is the first item's accordion body"  
            },
            {   id:"Item#02", 
                title: (<SubjectTitle index="02" title="Animal Husbandry & Veterinary Science" />), 
                component:"This is the Second item's accordion body"  
            },
            {   id:"Item#03", 
                title: (<SubjectTitle index="03" title="Anthropology" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#04", 
                title: (<SubjectTitle index="04" title="Botany" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#05", 
                title: (<SubjectTitle index="05" title="Chemistry" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#06", 
                title: (<SubjectTitle index="06" title="Civil Engineering" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#07", 
                title: (<SubjectTitle index="07" title="Commerce and Accountancy" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#08", 
                title: (<SubjectTitle index="08" title="Economics" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#09", 
                title: (<SubjectTitle index="09" title="Electrical Engineering" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#10", 
                title: (<SubjectTitle index="10" title="Geography" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#11", 
                title: (<SubjectTitle index="11" title="Geology" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#12", 
                title: (<SubjectTitle index="12" title="History" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#13", 
                title: (<SubjectTitle index="13" title="Law" />), 
                component:"This is the Third item's accordion body" 
            },
            {   id:"Item#14", 
                title: (<SubjectTitle index="14" title="Management" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#15", 
                title: (<SubjectTitle index="15" title="Mathematics" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#16", 
                title: (<SubjectTitle index="16" title="Mechanical Engineering" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#17", 
                title: (<SubjectTitle index="17" title="Medical Science" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#18", 
                title: (<SubjectTitle index="18" title="Philosophy" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#19", 
                title: (<SubjectTitle index="19" title="Physics" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#20", 
                title: (<SubjectTitle index="20" title="Political Science & International Relations" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#21", 
                title: (<SubjectTitle index="21" title="Psychology" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#22", 
                title: (<SubjectTitle index="22" title="Public Administration" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#23", 
                title: (<SubjectTitle index="23" title="Sociology" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#24", 
                title: (<SubjectTitle index="24" title="Statistics" />), 
                component:"This is the Third item's accordion body"  
            },
            {   id:"Item#25", 
                title: (<SubjectTitle index="25" title="Zoology" />), 
                component:"This is the Third item's accordion body"  
            }]}  />
 </View>);
};

export default React.memo(ExamSyllabus);