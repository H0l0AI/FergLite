//mock job database object, note each time object is just current time for simplicity
let jobs = [{
    id:998421,
    status:'active',
    createdAt:new Date(),
    name:'(Alex) roof replacement [3000 sq.ft]',
    clientContact:{
        phone:'+64210110230',
        email:'cashmore.alex@gmail.com'
    },
    notes:[
        {date:new Date(),note:'Arrived at site'},
        {date: new Date(),note:'Owner of property was not home'}
    ]

},{
    id:998420,
    status:'completed',
    createdAt:new Date(),
    name:'(Jordan) roof replacement [1800 sq. ft]',
    clientContact:{
        phone:'+642106033469',
        email:'jordan.steele@gmail.com'
    },
    notes:[
        {date:new Date(),note:'Arrived at site'},
        {date: new Date(),note:'Wrong size screws'},
        {date: new Date(),note:'Purchased correct size screws, invoice updated'},
        {date: new Date(),note:'Rained out, had to jump off the tools'},
        {date: new Date(),note:'Completed next day'}
    ]

},{
    id:998425,
    status:'completed',
    createdAt:new Date(),
    name:'Repair at 2/28 Burrington Pl',
    clientContact:{
        phone:'+642123339',
        email:'sherryannethomas61@gmail.com'
    },
    notes:[
        {date:new Date(),note:'Roof needed new ridging'},
        {date:new Date(),note:'Used less materials than invoiced'},
    ]

},{
    id:9984221,
    status:'invoicing',
    createdAt:new Date(),
    name:'Repair at 48 Miro St',
    clientContact:{
        phone:'+642106112959',
        email:'adrianjacobs_4@gmail.com'
    },
    notes:[
        {date:new Date(),note:'Dropped a drill through the kitchen roof'},
    ]

},];

//mock endpoint to get all the jobs
export const getAllJobs = (events) => {
    return new Promise((resolve, reject) => {
        return resolve({
            ok: true,
            status: 200,
            data: jobs
        });
    });
};
//mock endpoint to add notes to jobs collection
export const AddNoteToJob= (note,jobId)=>{
    let selectedJob = jobs.find((job)=>jobId===job.id);
    console.log('selectedJob',selectedJob)
    selectedJob.notes.push({note:note,date:new Date()});
    return new Promise((resolve, reject) => {
        return resolve({
            ok: true,
            status: 200,
            data: jobs
        });
    });
}

//mock endpoint to update a given jobs status in the collection
export const updateJobStatus= (status,jobId)=>{
    let selectedJob = jobs.find((job)=>jobId===job.id);
    console.log('selectedJob',selectedJob)
    selectedJob.status=status;
    return new Promise((resolve, reject) => {
        return resolve({
            ok: true,
            status: 200,
            data: jobs
        });
    });
}