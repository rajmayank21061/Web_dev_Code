const url = "https://catfact.ninja/fact";

const fetchData = () => {
fetch(url)
.then( (response) => response.json() )
.then( (data) => console.log(data) )
.catch( (e) => console.log(e) )
.finally( () => console.log(" All is Done. ") );
};

fetchData();

//then catch uses in Asynchronous error-handling (in api and promises)
//while try catch uses in Synchronous error-handling
