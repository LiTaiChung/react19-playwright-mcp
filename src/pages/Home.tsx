import ArticleList from '@/components/ArticleList';
import mockData from '@/queries/mockData';

const Home = () => {
  const data = mockData;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          歡迎來到 Ice 的 Blog
        </h1>
        <p className="text-gray-600 mt-2">分享 Ice 的生活點滴與技術心得</p>
      </header>

      <ArticleList data={data} />
    </div>
  );
};

export default Home;
