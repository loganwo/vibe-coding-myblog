return (
  <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 text-gray-800 flex flex-col items-center p-8 font-sans">
    <header className="max-w-2xl text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">我的个人网站</h1>
      <nav className="flex justify-center flex-wrap gap-2">
        {navButton("首页", "home")}
        {navButton("内页", "about")}
        {navButton("文章", "articles")}
      </nav>
    </header>

    <main className="w-full max-w-3xl">
      {page === "home" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">欢迎</h2>
          <p className="text-gray-700 leading-relaxed bg-white rounded-2xl p-6 shadow">
            欢迎来到我的个人网站，这里记录了我的点滴和思考。
          </p>
        </section>
      )}

      {page === "about" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">个人简介</h2>
          <p className="text-gray-700 leading-relaxed bg-white rounded-2xl p-6 shadow mb-6">
            我是一名热爱生活的人，喜欢旅行、美食和运动。这个网站是我的个人展示空间。
          </p>

          <h3 className="text-xl font-semibold mb-4">我的图片</h3>
          <input
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`upload-${index}`}
                className="rounded-2xl shadow"
              />
            ))}
          </div>
        </section>
      )}

      {page === "articles" && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">文章页</h2>
          <article className="bg-white rounded-2xl p-6 shadow mb-6">
            <h3 className="text-xl font-bold mb-2">第一篇文章</h3>
            <p className="text-gray-700 leading-relaxed">
              这是我的第一篇文章示例。在这里你可以写下你的随笔、学习笔记或旅行记录。
            </p>
          </article>
          <article className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-bold mb-2">第二篇文章</h3>
            <p className="text-gray-700 leading-relaxed">
              这里是另一篇文章示例，可以分享更多你的故事与想法。
            </p>
          </article>
        </section>
      )}
    </main>

    <footer className="mt-12 text-gray-500 text-sm">
      © {new Date().getFullYear()} 我的个人网站
    </footer>
  </div>
);
