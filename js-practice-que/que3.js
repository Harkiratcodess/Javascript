const students=[
    { name:"john", marks:88 },
    { name:"harkirat", marks:72 },
    { name:"ansh", marks:38 },
    { name:"tarun", marks:95 },
    { name:"sahil", marks:30 }
];

for(let i=0; i<students.length; i++){
    if(students[i].marks>=40){
        console.log(`${students[i].name} has passed with marks ${students[i].marks}`);
    }
    else{
        console.log(`${students[i].name} has failed with marks ${students[i].marks}`);
    }
}