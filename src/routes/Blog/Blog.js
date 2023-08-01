import React, { useEffect, useState } from "react";
import BlogContainer from "./Blog.styles";
import { client } from "../../client";
import Header from '../../components/Header/Header'
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../client";
import Footer from '../../components/Footer/Footer'
import Whatsapp from '../../components/Whatsapp/Whatsapp'


function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getServerSideProps().then((res) => {
      setPosts(res.posts);
    });
  }, []);

  return (
    <>
    <Header/>
    <BlogContainer>
      <h1>Últimas Notícias</h1>
      <div className="main">
        {posts.map((post) => (

          <div className="post" key={post._id}>
            <div className="posthead">
            {post.title ? <h2>- {post.title}</h2> : null}
            <div className="date">
            {post.author ? <p><strong>Autor(a):</strong> {post.author}</p> : null}
            {post.date ? <p><strong>Data:</strong> {post.date}</p> : null}
            </div>
            </div>
            <div className="postbody">
            {post.image ? <img src={urlFor(post.image)}/> : null}
            {post.body ? <PortableText value={post.body} /> : null}           
           </div>
          </div>

        ))}
      </div>
    </BlogContainer>
    <Footer/>
    <Whatsapp/>
    </>

  );
}

const getServerSideProps = async () => {
  const posts = await client.fetch('*[_type=="post"]');
  return {
    posts,
  };
};

export default Blog;