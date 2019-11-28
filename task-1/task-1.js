const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];
const totalCountTime = tasks.reduce((acc,currValue)=>{
   if (currValue.category === 'Frontend'){
       acc += currValue.timeSpent
   }
   return acc
},0);
const totalBugTime = tasks.reduce((acc,currValue)=>{
    if (currValue.type === 'bug'){
        acc += currValue.timeSpent
    }
    return acc
},0);
const getCategory = tasks.reduce((acc, value)=>{
    acc[value.category]++;
    return acc

},{Frontend:0,Backend:0});

let tasksUi = tasks.filter(e => e.title.includes('UI'));

let arrayTask = tasks
    .filter(e => e.timeSpent > 4 )
    .map((item)=>({title:item.title,category:item.category}));


console.log('Количество задач, имеющих в названии слово "UI": '+ tasksUi.length);
console.log(arrayTask);
console.log(totalCountTime);
console.log(totalBugTime);
console.log(getCategory );