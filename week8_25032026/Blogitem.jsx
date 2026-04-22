import { Link } from &quot;react-router-dom&quot;;
function BlogItem({ blog }) {
  return (
    &lt;div className=&quot;blog-item&quot;&gt;
      &lt;h3&gt;{blog.title}&lt;/h3&gt;
      &lt;p&gt;{blog.content}&lt;/p&gt;
      &lt;Link to={`/blog/${blog.id}`}&gt;
        &lt;button&gt;Read More&lt;/button&gt;
      &lt;/Link&gt;
    &lt;/div&gt;
  );
}