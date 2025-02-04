import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to get login state from Redux
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.status); // Get login status from Redux store

  useEffect(() => {
    if (isLoggedIn) {
      // Fetch posts only if the user is logged in
      appwriteService.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [isLoggedIn]); // Re-run effect when login state changes

  return (
    <div className="w-full py-8 mt-4 text-center">
      <Container>
        {!isLoggedIn ? (
          // Show login prompt if user is not logged in
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        ) : posts.length === 0 ? (
          // Show a message if posts are available but empty
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No posts available
              </h1>
            </div>
          </div>
        ) : (
          // Show posts if user is logged in and posts are available
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
