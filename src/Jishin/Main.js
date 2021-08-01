import  React from 'react'
import {Title} from './Title'
import { ActionList } from './ActionList'

import { PrecautionList1 } from './PrecautionList1'
import { PrecautionList2 } from './PrecautionList2'
import { PrecautionList3 } from './PrecautionList3'

import {SafetyMeasures} from './SafetyMeasures'

export const Jishin = () => {
    return(<>
        <Title/>
        <img src="/img/family_under_table.png" alt="" style={{width:"100%"}}/>
        <ActionList/>

        <PrecautionList1/>
        <PrecautionList2/>
        <PrecautionList3/>
        <SafetyMeasures/>

    </>)
}