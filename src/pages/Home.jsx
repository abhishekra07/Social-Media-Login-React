import Card from '../components/Card'
import {posts} from '../data'

function Home() {
    return (
        <div className="home">
            <h3>OWASP Top 10 Vulnerabilities</h3>
            {posts.map(post => {
                return <Card post={post} key={post.id}/>
            })}
        </div>
    )
}

export default Home
