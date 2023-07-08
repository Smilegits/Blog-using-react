// import { useState,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data:blogs,name,isPending,error} = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ])
    
    // const [name,setName]=useState("Mario");
    // const [age,setage]=useState(25);
    // const handleClick = (e) =>{
    //     console.log('hello,Smile',e);
    // }
    // const handleClick = () =>{
    //     setName("Smile");
    //     setage(22);
    // }
    // const handleClickAgain = (name,e) =>{
    //     console.log('hello '+name,e.target);
    // }
    // const handleDelete = (id) => {
    //     const newBlogs=blogs.filter(blog=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
    // useEffect(() =>{
    //     console.log('use effect ran');
    //     console.log(blogs);
    // },[]); it is used to run for single time
    // useEffect(() =>{
    //     console.log('use effect ran');
    //     console.log(name);
    // },[name]); 
    
    return (  
        <div className="home">
            {error && <div>{ error }</div>}
            {/* <h2>HomePage</h2>
            <p>{name} is {age} old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClick('mario',e)}>Click Me Again</button> */}
           {isPending && <div>Loading....</div> }
           {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
           {/* <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> */}
           {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's Blogs!"/> */}
           {/* <button onClick={()=>setName('Shelley')}>Change name</button> */}
           <p>{name}</p>
        </div>
    );
}
 
export default Home;