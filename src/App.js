import logo from './logo.svg';
import './App.css';
import React from 'react';
import {AddNoteToJob, getAllJobs, updateJobStatus} from "./mockService";
import {calculateNewStatus, renderActiveJobClass} from "./utilities";
import {JobModal} from "./components/JobModal";
import {FilterList} from "./components/FilterList";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backendDataIsLoading: false,
      jobs: null,
      selectedFilter:'all',

    }
  }

  componentDidMount() {
    this.setState({backendDataIsLoading: true})
    getAllJobs().then((response) => {
      console.log('res:', response.data);
      this.setState({jobs:response.data,backendDataIsLoading:false});
    });
  }

  addNoteToJobAndRefresh(input,jobId){
      console.log('i',input,jobId)
      AddNoteToJob(input,jobId).then(()=>{
          getAllJobs().then((response)=>{
              this.setState({jobs:response.data})
          })

      })
  }
    updateStatusAndRefresh(status,direction){
      let selectedJobId=this.state.selectedJob.id;
      let newStatus = calculateNewStatus(status,direction);
      updateJobStatus(newStatus,selectedJobId).then(()=>{
          getAllJobs().then((response)=>{
              this.setState({jobs:response.data})
          })

      })
  }
    selectFilterAndRefreshJobList(filter){
      console.log('filter:',filter);
      this.setState({selectedFilter:filter})
  }

  render(){
    const {jobs,backendDataIsLoading} = this.state;
    console.log(jobs,'JOBS')
      let visibleJobs = jobs&&jobs.filter((job)=>{
          if(this.state.selectedFilter!=='all'){
              return job.status===this.state.selectedFilter
          }
          else{
              return true;
          }
      });
    return(
        <div>
            <div className="practiceHeading">Rahul's Roofing</div>

            <div style={{display:"flex",justifyContent:'center'}}>
          <JobModal updateStatus={(status,direction)=>{this.updateStatusAndRefresh(status,direction)}} addNoteToJobAndRefresh={(input,jobId)=>{this.addNoteToJobAndRefresh(input,jobId)}} closeJobModal={()=>{this.setState({selectedJob:null})}} selectedJob={this.state.selectedJob} />
          </div>
          <div style={{opacity:this.state.selectedJob?0.2:1,zIndex:1}}>
            <FilterList selectedFilter={this.state.selectedFilter} selectFilterAndRefreshJobList={(filter)=>{this.selectFilterAndRefreshJobList(filter)}} />
              <div className="jobsContainer" >
          {visibleJobs&&visibleJobs.length>=1?visibleJobs.map((job)=>{
            return(
            <div onClick={(e)=>{if(!this.state.selectedJob){this.setState({selectedJob:job})}}} className={`jobInstance ${renderActiveJobClass(job.status)}`}>
              <div style={{height:60}}>
                <div className="jobListingTitle">{job.name}</div>
              </div>
            </div>)

          }):
              <div>
                  Sorry, no jobs match your current selection.
              </div>
          }

          </div>
          </div>

        </div>
    )
  }
}

export default App;
