const students=[
    { name:"Asshish", english:88, math:78, science:90 },
    { name:"harkirat", english:72, math:65, science:80 },
    { name:"ansh", english:38, math:45, science:50 },
    { name:"tarun", english:95, math:85, science:90 },
    { name:"sahil", english:30, math:35, science:40 }
];
for(let i=0; i<students.length; i++){
    console.log
}

function calculateaverageMarks(students){
    for(let i=0; i<students.length; i++){
        let averageMarks=(students[i].english + students[i].math + students[i].science)/3;
        console.log(`${students[i].name} has an average mark of ${averageMarks.toFixed(2)}`);
    }
}
