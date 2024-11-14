import { getPostData as fetchPostData } from '@/lib/getSorted';
import Date from '@/lib/date'
import Head from 'next/head';
import '../../prism.css'

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await fetchPostData(params.id) as { id: string; contentHtml: string; date: string; title: string };
  return (
    <div className="max-w-2xl mx-auto">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl sm:text-4xl font-bold">{postData.title}</h1>
        <div className="text-gray-500 text-sm sm:text-base">
          <Date dateString={postData.date} />
        </div>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}