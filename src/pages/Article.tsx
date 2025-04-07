import { useParams } from 'react-router';

import mockData from '@/queries/mockData';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockData[parseInt(id || '0', 10) - 1];

  if (!article) {
    return <p className="text-center text-gray-600">文章不存在</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <div className="text-sm text-gray-500 mb-8">
        作者: {article.author} | 日期: {article.date}
      </div>
      <p className="text-gray-700">
        這是文章的完整內容，您可以在這裡添加更多詳細資訊。
      </p>
    </div>
  );
};

export default Article;
