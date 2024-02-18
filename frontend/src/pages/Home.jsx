import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative'>
      {
        articles.map((article,i)=><ArticleCard key={i} article={article} />)
      }
      <div className="fixed bottom-8 right-8">
    <Link to={`/write`} className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Write</Link>
  </div>
    </div>
  )
}

export default Home

const articles = [
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
  {
    title:"First article",
    body:"To write a method to like an article, you should use the HTTP POST verb to map the route. In RESTful API design, the action of liking an article usually involves creating a new 'like' resource associated with the article. Since you're creating a new resource (a like) when the user likes an article, the POST method is appropriate. Here's an example of how you might structure your route:",
    author:"doraemon"
  },
]