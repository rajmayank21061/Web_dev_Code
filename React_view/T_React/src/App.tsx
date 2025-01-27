import { useGetPostsQuery } from './redux/api'
import PostsCard from './components/PostsCard';

const App = () => {

  const {isLoading,isError,isSuccess,data,error} = 
  useGetPostsQuery("");
  console.log(isLoading,isError,isSuccess,data,error);
  return (
    <div>
      <h1>My app Is Ready !!!</h1>


      {
        data?.map( i =>(
          <PostsCard key={i.id} post={i} />
        ))
      }
    </div>
  )
}

export default App
