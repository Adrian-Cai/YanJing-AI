export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">言镜 AI 面试官</h1>
      <p className="mt-4 text-gray-700">
        上传简历，模拟真实面试官追问。基于简历、岗位和回答表现生成专属面试题与评分反馈。
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/interview" className="rounded bg-black px-4 py-2 text-white">开始模拟面试</a>
        <a href="/resume" className="rounded border px-4 py-2">上传简历体验</a>
      </div>
    </main>
  );
}
