import React from 'react';
import { Card, Icon } from 'e-ui-react';

const Features = ({ data }) =>{
 const Feature = ({ icon, title, desc }) =>{
    return (
            <Card padding={15}>
                <div className="row">
                    <div className="col-xxl-2 col-sm-2" style={{ display:'flex', flex:1, justifyContent:'center', alignItems:'center' }}>
                        <Icon type="FontAwesome" name={icon} size={36} color="#000" />
                    </div>
                    <div className="col-xxl-10 col-sm-10">
                        <h4 style={{ color:'#000' }}><b>{title}</b></h4>
                        <span style={{ fontSize:'14px', color:'#000' }}>{desc}</span>
                    </div>
                </div>
            </Card>
           );
 };

 return (<div className="mtop45p" style={{ backgroundColor:'#5d607f', padding:'35px', color:'#fff' }}>
        <div align="center"><h4 className="app-heading"><b>OUR FEATURES</b></h4></div>
 <div className="container-fluid mtop35p">   
    <div className="row">
        <div className="col-xxl-1 col-sm-1"></div>
        <div className="col-xxl-10 col-sm-10">
        <div className="row">
            {data?.map((d,i)=>{
                return (<div key={i} className="col-xxl-6 col-sm-6 mbot15p">
                    <Feature icon={d?.icon} title={d?.title} desc={d?.desc} />
                </div>);
            })}
        </div>
        </div>
        <div className="col-xxl-1 col-sm-1"></div>
        </div>
     </div>
    </div>);
};

export default Features;