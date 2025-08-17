import React from "react";
import {
  getPosts,
  type Post,
  deletePost,
  createPost,
  updatePost,
} from "./action";
import ThemeToggle from "@/components/share/ThemeToggle";

const PostPage = async () => {
  const posts: Post[] | undefined = await getPosts();
  //   const titles = posts && posts?.map((post) => post.title);
  if (posts) posts?.reverse();
  return (
    <React.Fragment>
      <ThemeToggle>
        <main className="flex flex-col justify-center ">
          <div className="flex justify-between items-center px-[130px] pt-5 ">
            <h3 className=" text-3xl font-semibold ">Posts</h3>
            <form action={createPost}>
              <button
                type="submit"
                className="px-4 py-2 my-2 bg-indigo-600 rounded-2xl cursor-pointer"
              >
                Test Create
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-4 container mx-auto mt-6 bg-cyan-800 px-4 py-2 my-2 rounded-[30px]">
            {posts &&
              Array.isArray(posts) &&
              posts?.map((post, idx) => (
                <div
                  key={idx}
                  className="py-3 my-2 rounded-2xl bg-slate-800 text-white flex justify-between items-center px-5"
                >
                  <span>{post?.title}</span>
                  <form className="flex">
                    <input type="hidden" name="id" value={post.id} />
                    <button
                      formAction={deletePost}
                      type="submit"
                      className="text-red-600"
                    >
                      Del
                    </button>
                    <button
                      formAction={updatePost}
                      type="submit"
                      className="text-yellow-600 ms-2"
                    >
                      Update
                    </button>
                  </form>
                </div>
              ))}
          </div>
        </main>
      </ThemeToggle>
    </React.Fragment>
  );
};

export default PostPage;
