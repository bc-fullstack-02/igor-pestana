import { useState, useEffect } from "react"

import api from "../../services/api"
import { getAuthHeader } from "../../services/auth"
import { likePost, unlikePost } from "../../services/posts"

import Menu from '../../components/Menu'
import Feed from '../../components/Feed'

import { Post } from "../../Model/Post"
import Avatar from "../../components/Avatar"
import Text from '../../components/Text';

function Home() {
    const authHeader = getAuthHeader()
    const profile = localStorage.getItem("profile") as string
    const [posts, setPosts] = useState<Post[]>([])


    useEffect(() => {
        async function getPosts() {
            const response = await api.get('/feed', authHeader)
            setPosts(response.data)
        }
        getPosts()
    }, [])

    async function handleLike(postId: String) {
        const [post, ...rest] = posts
            .filter((post) => post._id === postId)

        try {
            if (post && !post.likes.includes(profile)) {
                const newPost = await likePost(post, profile)
                changePostItem(newPost)
            } else {
                const newPost = await unlikePost(post, profile)
                changePostItem(newPost)
            }
        } catch (err) {
            console.error(err)
        }
    }


    function changePostItem(newPost: Post) {
        setPosts((posts) => {
            const post = newPost
            const index = posts.indexOf(post)
            posts[index] = post
            return [...posts]
        })
    }

    async function newPostCreated(post: Post) {
        try {
            const response = await api.get(`/posts/${post._id}`, authHeader)
            const newPost = response.data
            setPosts((posts) => [newPost, ...posts])
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="w-screen h-screen flex">
            <Menu newPostCreated={newPostCreated} />
            <div className="flex-rol mt-4 w-full overflow-y-auto scroll-smooth">
                <Text size='lg' className="font-extrabold ml-5">Feed</Text>
                <Avatar />
                <Feed posts={posts} handleLike={handleLike} />
            </div>
        </div>
    )
}

export default Home