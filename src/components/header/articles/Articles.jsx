import { useEffect, useState } from "react";
import styles from "./Articles.module.scss";
import axios from "axios";
import { Header } from "../Header";

export const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <h1>Articles</h1>
      {loading && "Loading..."}
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <a
              style={{
                color: "brown",
                textDecoration: "none",
                textAlign: "end",
                display: "block",
              }}
              href="/"
            >
              Read now
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
