import { useLoaderData } from "react-router-dom"


function Blog() {
    const data = useLoaderData()
    console.log(data);
  return (
    <div>Blog</div>
  )
}

export default Blog