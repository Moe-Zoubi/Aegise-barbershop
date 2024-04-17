import BlogsData from "../data/BlogsData"



const BlogBanner = () => {

    


    return(
        <div className="blog-banner gray-blue-bg">
            <div className="blog-intro">
                <h2>LATEST BLOG POSTS</h2>
                <p>
                Barbershop is not only a place where you can get a first-class haircut. 
                Our barbers also write interesting articles on everything concerning their sphere of interest.
                </p>
            </div>
            <div className="blog-carousel">
                {BlogsData.map((blog) => (
                    <div className="blog-slide">
                        <div className="blog-img"><img src={blog.img} alt="blog" /></div>
                        <div className="blog-text">
                            <h3>{blog.title}</h3>
                            <p className="publish-info"><span className="blog-author">{blog.author}</span><span className="blog-date">{blog.date}</span></p>
                            <p>{blog.summary}</p>
                            <button className="green-btn">READ MORE</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogBanner