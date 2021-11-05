

import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, updatePosts } from "../store/actions";
import {Table} from "antd";

function Posts() {
    const [title, setTitle] = useState("");
    const [state, dispatch] = useContext(Context);
    const inputRef = useRef(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Post',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Time',
            dataIndex: 'timestamp',
            key: 'timestamp',
        },
    ]



    useEffect(() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(async (data) => {
            await dispatch(updatePosts(data))
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle("");
        addNewPost();
        if (inputRef.current) inputRef.current.focus();
    };


    const addNewPost = () => {
        const newPost = {
            id: state.auth.user.id,
            timestamp: Date.now(),
            title,
        };
        dispatch(addPost(newPost));
    };
    return(
        <div style={{ textAlign: "center" }}>
            <h1>Posts</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <button type="submit">Submit</button>
            </form>
            <Table columns={columns} dataSource={state.posts.data} rowKey='id'/>
        </div>
    );
}

export default Posts;