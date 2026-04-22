export default BlogItem;
import BlogItem from &quot;./BlogItem&quot;;
function BlogList({ blogs }) {
  return (
    &lt;div&gt;
      {blogs.map((blog) =&gt; (
        &lt;BlogItem key={blog.id} blog={blog}
/&gt;
      ))}
    &lt;/div&gt;
  );
}
export default BlogList;