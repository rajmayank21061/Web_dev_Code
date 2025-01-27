
//Generics => T(type)

interface hasAge{
    age: number;
}
interface player{
    name:string;
    age:number;
}
//extend require for age property
function getOldest<T extends hasAge>(people:T[]):T{
    return people.sort((a,b) => b.age - a.age) [0] ;
}

const ages = [{age:43},{age:1},{age:6},{age:8},{age:34}];
getOldest(ages);

const players: player[] = [
    {name:'jim',age:23},
    {name:'sam',age:19},
    {name:'bheem',age:40}
];

//Assertion
//const person = getOldest(players) as player;

//by Generics
const person = getOldest(players);
person.age;




interface IPost {
    title:string;
    id:number;
    description:string;
}

interface IUser {
    id:number;
    name:string;
    age:number;
}

const fetchPostData = async (path: string) : Promise<IPost[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

( async () => {
    const posts = await fetchPostData('/home');
    //posts[0].

})();

const fetchUserData = async (path: string) : Promise<IUser[]> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

( async () => {
    const users = await fetchUserData('/home');
    //users[0].

})();

  //by Using Generics

  const fetchData = async<T>(path: string) : Promise<T> => {
    const response = await fetch(`http://example.com${path}`);
    return response.json();
};

( async () => {
    const users = await fetchData<IUser[]>('/home');
    //const posts = await fetchData<IPost[]>('/home');
    //users[0].

})();