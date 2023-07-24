import React from "react";
import { PortableText } from "@portabletext/react";
import BlogPostContainer from "./BlogPost.styles";

function BlogPost({ image, body }) {
  return (
    <BlogPostContainer>
      <div>{image}</div>
      <PortableText value={body} />
    </BlogPostContainer>
  );
}

export default BlogPost;
