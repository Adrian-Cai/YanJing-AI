'use client';

import { FormEvent, useState } from 'react';

type UploadResult = {
  filename: string;
  size_bytes: number;
  page_count: number;
  raw_text: string;
};

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<UploadResult | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      setError('请先选择 PDF 文件');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('http://localhost:8000/api/resume/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.detail || '上传失败');
        return;
      }
      setResult(data as UploadResult);
    } catch {
      setError('请求失败，请确认后端服务已启动');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-2xl font-bold">简历上传（V0.1）</h1>
      <p className="mt-2 text-gray-600">当前仅支持 PDF，包含安全校验与文本提取。</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded border p-4">
        <input
          type="file"
          accept="application/pdf,.pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <button disabled={loading} className="rounded bg-black px-4 py-2 text-white disabled:opacity-60">
          {loading ? '上传中...' : '上传并提取文本'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600">{error}</p>}

      {result && (
        <section className="mt-6 rounded border p-4">
          <h2 className="font-semibold">提取结果</h2>
          <p>文件名：{result.filename}</p>
          <p>大小：{result.size_bytes} bytes</p>
          <p>页数：{result.page_count}</p>
          <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap bg-gray-50 p-3 text-sm">{result.raw_text}</pre>
        </section>
      )}
    </main>
  );
}
