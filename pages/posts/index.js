import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, updateTitle } from '../store/postSlice';

const Posts = () => {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [newTitle, setNewTitle] = useState('');

    const dispatch = useDispatch();
    const postList = useSelector((state) => state.posts.posts);

    return (
        <div>
            <div className='bg-slate-100 px-10 text-gray-800 flex flex-col gap-2 justify-center items-start py-6 w-full'>
                <label className='font-semibold' htmlFor="title">Title:</label>
                <input
                    className='bg-blue-100 border-2 w-1/4 border-gray-400 outline-0 rounded-md px-3 py-1' name='title'
                    type="text"
                    onChange={(e) => settitle(e.target.value)} />
                <label className='font-semibold' htmlFor="title">Post:</label>
                <textarea
                    className='bg-blue-100 border-2 w-1/4 border-gray-400 outline-0 rounded-md px-3 py-1' name='body'
                    type="text"
                    onChange={(e) => setbody(e.target.value)} />
                <button
                    className='border border-blue-300 rounded hover:bg-blue-300 py-1 px-3 font-semibold'
                    onClick={() => { dispatch(addPost({ id: postList[postList.length - 1].id + 1, title: title, body: body })) }}
                >Post</button>
            </div>
            <h1 className='text-2xl px-10 text-blue-800 pt-6 font-semibold bg-slate-100'>All posts: {postList.length}</h1>
            <div className='text-gray-800 bg-slate-100 p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
                {
                    postList.map(post => (
                        // post.id <= 8 &&
                        <div
                            key={post.id}
                            className='w-full cursor-pointer rounded-md px-2 pb-28 pt-2 bg-blue-100 relative'>
                            <h3 className='mb-2 text-blue-600 font-semibold'>Post ID# {post.id}</h3>
                            <h1 className='font-semibold text-xl'>{post.title}</h1>
                            <p className='mt-4 text-blue-900'>{post.body}</p>
                            <div className='mt-2 flex gap-3 absolute bottom-2 flex-col'>
                                <div className='flex gap-3'>
                                    <input type="text"
                                        placeholder='new title'
                                        className='rounded-md bg-slate-100 px-3 outline-none border-2 focus:border-blue-300 text-sm'
                                        onChange={(e) => {
                                            setNewTitle(e.target.value)
                                        }} />
                                    <button
                                        className='border border-green-500 rounded hover:bg-green-200 py-1 px-3 font-semibold'
                                        onClick={() => {
                                            dispatch(updateTitle({ id: post.id, title: newTitle }))
                                        }}>Update</button>
                                </div>
                                <button
                                    className='border border-red-500 rounded hover:bg-red-200 py-1 px-3 font-semibold'
                                    onClick={() => {
                                        dispatch(deletePost({ id: post.id }))
                                    }}
                                >Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Posts;

