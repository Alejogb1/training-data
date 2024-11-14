import { getSortedPostsData } from '../lib/getSorted';
import Link from 'next/link';
export default function Blog() {
    const allPostsData = getSortedPostsData();
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Training data blog</h1>
            <ul className="space-y-6">
                {allPostsData.map(({ id, date, title }) => (
                    <Link href={`/post/${id}`} key={id} >
                        <li className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
                          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                          <p className="text-gray-600 mt-2">Post ID: {id}</p>
                          <p className="text-gray-500 text-sm mt-1">{new Date(date).toLocaleDateString()}</p>

                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}