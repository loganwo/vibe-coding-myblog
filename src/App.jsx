export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 flex flex-col items-center p-8 font-sans">
      <header className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">我的个人网站</h1>
        <nav className="flex justify-center flex-wrap gap-2">
          <button className="px-4 py-2 rounded-2xl shadow bg-pink-100 hover:bg-pink-200 text-gray-700 transition m-1">
            首页
          </button>
          <button className="px-4 py-2 rounded-2xl shadow bg-pink-100 hover:bg-pink-200 text-gray-700 transition m-1">
            内页
          </button>
          <button className="px-4 py-2 rounded-2xl shadow bg-pink-100 hover:bg-pink-200 text-gray-700 transition m-1">
            文章
          </button>
        </nav>
      </header>

      <main className="w-full max-w-3xl">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">欢迎</h2>
          <p className="text-gray-700 leading-relaxed bg-white rounded-2xl p-6 shadow">
            欢迎来到我的个人网站，这里记录了我的点滴和思考。
          </p>
        </section>
      </main>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} 我的个人网站
      </footer>
    </div>
  );
}
