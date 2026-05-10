import { useState, useEffect } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError("資料載入失敗，請重新整理");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p className="text-sm text-slate-400 p-4">載入中⋯</p>;
  if (error) return <p className="text-sm text-red-400 p-4">{error}</p>;

  return (
    <div className="flex flex-col gap-3 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="rounded-2xl border border-slate-200 p-4 hover:border-slate-400 hover:shadow-sm transition-all"
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold text-slate-800">{post.title}</h2>
            <span className="text-xs font-medium text-slate-400">
              #{post.id}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-500">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
