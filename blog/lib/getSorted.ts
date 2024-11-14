import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blog-data');

type PostData = {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
};

export function getSortedPostsData() {
  console.log("Fetching sorted posts data...");
  const fileNames = fs.readdirSync(postsDirectory);
  console.log("File names:", fileNames);
  
  const allPostsData = fileNames.map((fileName) => {
    console.log(`Processing file: ${fileName}`);
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    console.log("Matter result:", matterResult);
    return {
      ...matterResult.data as PostData,
    };
  });
  
  console.log("All posts data before sorting:", allPostsData);
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  console.log(`Fetching post data for ID: ${id}`);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  console.log("Post metadata:", matterResult.data);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
