'use server'

import { revalidatePath } from "next/cache";

export type Post = {
    useId?: number,
    id: string,
    body: string,
    title: string

}

export async function getPosts(): Promise<Array<Post> | undefined> {
    const response = await fetch('http://localhost:4000/posts');
    const posts: Array<Post> | undefined = await response.json()
    return posts
}


export async function deletePost(formData: FormData): Promise<void> {
    const id = formData.get('id') as string;
    const response = await fetch(`http://localhost:4000/posts/${(id)}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('delete post failed!')
    revalidatePath('/tests/posts');
}


export async function updatePost(formData: FormData): Promise<void> {
    const id = formData.get('id') as string;

    const response = await fetch(`http://localhost:4000/posts/${(id)}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: "update title",
            body: 'update body'
        })
    });
    if (!response.ok) throw new Error('update post failed!')
    revalidatePath('/tests/posts');
}


export async function createPost(formData?: FormData) {
    // console.log(formData);

    const newPost = {
        userId: Math.random() * 9999,
        title: 'test title',
        body: 'test body'
    };

    const response = await fetch(`http://localhost:4000/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const post = await response.json()
    if (post) revalidatePath('/tests/posts')
}