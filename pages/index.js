import Head from 'next/head';

function Home() {
  return (
    <div class="bg-red-200 grid grid-cols-3 mx-64 min-h-screen">
      <nav>
        Navigation
      </nav>
      <main>
        Tweets
      </main>
      <aside>
        Links
      </aside>
    </div>
  )
}

export default Home