import React from 'react';
import {renderActiveJobClass} from '../utilities';
import {AddNoteToJob, getAllJobs} from "../mockService";
import moment from "moment";
export const JobModal =(props)=>{
    console.log('job:',props.selectedJob);
    return(props.selectedJob?<div className="jobModal">
        <div className="closeContainer">
            <div className="closeButton" onClick={()=>{props.closeJobModal()}}>X</div>
        </div>
        <div className="jobTitle">{props.selectedJob.name}
        </div>
        <div style={{textAlign:'center',fontSize:12,marginBottom:5}}>Created at: {moment(props.selectedJob.createdAt).format('LLLL')}</div>
        <JobStatus status={props.selectedJob.status} updateStatus={props.updateStatus} />

        <div style={{width:'100%',height:100}}>
            <div style={{borderBottom:'1px solid #ebebeb',textAlign:'center',paddingTop:20,marginBottom:20}}>Contact Info</div>
            <div>{props.selectedJob.clientContact.phone}</div>
            <div>{props.selectedJob.clientContact.email}</div>
        </div>

        <JobNotes addNoteToJobAndRefresh={props.addNoteToJobAndRefresh} notes={props.selectedJob.notes} jobId={props.selectedJob.id} />
        <br />
    </div>:null)

}

export class JobNotes extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                noteInput:null
            }
        }
        addNote(){
            console.log('note:',this.state.noteInput);
            this.props.addNoteToJobAndRefresh(this.state.noteInput,this.props.jobId)
        }
        handleNoteInput(e){
            this.setState({noteInput:e.target.value})
        }
        render(){
            return(<div>
                <div style={{borderBottom:'1px solid #ebebeb',textAlign:'center',paddingTop:20}}>Notes</div>
                <div style={{width:'100%',maxHeight:115,minHeight:115,overflowY:'auto'}}>
                    {this.props.notes.map((note)=>{
                        return(<div style={{color:'#4264ea'}}>{note.note}</div>);
                    })}


                </div>
                <div>
                    <input
                        style={{    height: 60,marginTop:20}}
                        id={'input-notes'}
                        tabIndex={-1}
                        className="notes-input"
                        type="text"
                        name="message"
                        value={this.state.noteInput}
                        placeholder="Add a note"
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                this.addNote();
                                this.setState({noteInput:''})
                            }
                        }}

                        onChange={(e) => { this.handleNoteInput(e); }}
                    />
                </div>
            </div>)
        }

}

export const JobStatus =(props)=>{
    return(
        <div>
            <div className={`jobStatus ${renderActiveJobClass(props.status)}`}>
                <i onClick={()=>{props.updateStatus(props.status,'back')}} style={{position:'absolute',left:0,top:-4,cursor:'pointer'}} className="material-icons">keyboard_arrow_left</i>
                {props.status.toUpperCase()}
                <i onClick={()=>{props.updateStatus(props.status,'forward')}} style={{position:'absolute',right:0,top:-4,cursor:'pointer'}} className="material-icons">keyboard_arrow_right</i>

            </div>

        </div>

    )
}