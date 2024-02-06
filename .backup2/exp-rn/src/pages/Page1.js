import React from "react";
import { TabNavigation } from '@AppComponent/Navigation/Tab/index';
import { HomeScreen } from './HomeScreen';
import { CanvasScreen } from './CanvasScreen';
import { LEDGame } from './LEDGame/index';

export const Page1Screen = (props)=>{
 return (
 <>
 <TabNavigation tabMenu={[{ name:'Tab1', icon:'account', badge:3, component: HomeScreen , initialParams:{} },
 { name:'Tab2', icon:'bell', component:CanvasScreen },
 { name:'Tab3', icon:'account', component:LEDGame },
 { name:'Tab4', icon:'bell', component:HomeScreen },
 { name:'Tab5', icon:'account', component:HomeScreen }]} headerShown={false} />
 </>
 );
};

