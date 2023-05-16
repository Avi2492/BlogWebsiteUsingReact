import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // custom hook usefetch.js
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  //const [name, setName] = useState("avinash");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* Props */}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}
      {/* Reuse this props */}
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "avinash")}
        title="Avinash Blogs!"
      /> */}
      {/* Change name */}
      {/* <button onClick={() => setName("Sneha")}>Change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
