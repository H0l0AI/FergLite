import React from "react";

export const FilterList =(props)=>{
    return(
    <div style={{width:'100%',height:95,backgroundColor:'#bababa'}}>
        <div>
            <div style={{paddingTop:20,color:'#2545c3',marginLeft:45}}>Quick filters:</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',width:900}}>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('all')
            }} className={`${props.selectedFilter==='all'&&'selected'} filterInstance all`}>
                Show All
            </div>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('scheduled')
            }} className={`${props.selectedFilter==='scheduled'&&'selected'} filterInstance scheduled`}>
                Scheduled
            </div>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('active')
            }} className={`${props.selectedFilter==='active'&&'selected'} filterInstance active`}>
                In Progress
            </div>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('toPriced')
            }} className={`${props.selectedFilter==='toPriced'&&'selected'} filterInstance toPriced`}>
                To Priced
            </div>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('invoicing')
            }} className={`${props.selectedFilter==='invoicing'&&'selected'} filterInstance invoicing`}>
                Invoicing
            </div>
            <div onClick={()=>{
                props.selectFilterAndRefreshJobList('completed')
            }} className={`${props.selectedFilter==='completed'&&'selected'} filterInstance completed`}>
                Completed
            </div>

        </div>

    </div>);
}