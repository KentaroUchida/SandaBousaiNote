import  React from 'react'
import {Title} from './Title'
import { ActionList } from './ActionList'
import { PrecautionList1 } from './PrecautionList1'
import { PrecautionList2 } from './PrecautionList2'
import { PrecautionList3 } from './PrecautionList3'
export const Jishin = () => {
    return(<>
        <Title/>
        <ActionList/>
        <PrecautionList1/>
        <PrecautionList2/>
        <PrecautionList3/>
    </>)
}