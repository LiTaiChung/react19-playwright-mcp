import React from 'react';
import { Link } from 'react-router';

type Article = {
  title: string;
  description: string;
  author: string;
  date: string;
};

type ArticleListProps = {
  data: Article[];
};

const ArticleList: React.FC<ArticleListProps> = ({ data }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">最新文章</h2>
      <ul className="space-y-4">
        {data.map((article, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            data-testid={`article-item-${index}`}
          >
            <Link
              to={`/article/${index + 1}`}
              className="text-lg font-medium text-blue-600 hover:underline"
              data-testid={`article-title-${index}`}
            >
              {article.title}
            </Link>
            <p
              className="text-gray-600 mt-1"
              data-testid={`article-description-${index}`}
            >
              {article.description}
            </p>
            <div
              className="text-sm text-gray-500 mt-2"
              data-testid={`article-meta-${index}`}
            >
              作者: {article.author} | 日期: {article.date}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleList;
