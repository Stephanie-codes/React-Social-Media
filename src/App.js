import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import './App.css';
import { POSTS } from './posts.js';

function App() {
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostImage, setNewPostImage] = useState(null); 
  const queryClient = useQueryClient()

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS])
  })

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewPostImage(file);
  };

  const newPostMutation = useMutation(
    title => {
      const newPost = {
        id: crypto.randomUUID(),
        title,
      };
      POSTS.push(newPost);
      return wait(1000).then(() => newPost);
    },
    {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    }
  })

  if (postsQuery.isLoading) return <h1>Loading...</h1>
  if (postsQuery.isError) {
    return <pre>{JSON.stringify(postsQuery.error)}</pre>
  }

    return (
      <div className='container'>
        {postsQuery.data.map(post => (
          <div className="post-container" key={post.id}>
              <div className="post-image">
                <img src={post.image} alt={post.alt} />
              </div>
              <div>{post.title}</div>
          </div>
        ))}
        <div className="input-container">
          <input
            type="text"
            value={newPostTitle}
            onChange={e => setNewPostTitle(e.target.value)}
          />
          <input type="file" onChange={handleImageUpload} />
        </div>
        <button
          disabled={newPostMutation.isLoading}
          onClick={() => {
            newPostMutation.mutate(newPostTitle);
            setNewPostTitle('');
          }}
        >
          Add New
        </button>
      </div>
    );
  }

function wait(duration) {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App;
