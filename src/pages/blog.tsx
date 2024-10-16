// pages/index.js

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Post } from "contentlayer/generated";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { Root } from "@/components/layouts/root";
import { MiddlePanel } from "@/components/layouts/middle-panel";
import { Badge } from "@/components/ui/badge";
import StickyHeader from "@/components/layouts/sticky-nav";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

function PostCard(post: Post) {
  return (
    <div className="[&:not(:first-child)]:mt-10">
      <h3 className="scroll-m-20 text-2xl font-extrabold tracking-tight sm:text-3xl">
        <Link href={post.url}>{post.title}</Link>
      </h3>
      <p className="text-md my-1 text-slate-700 dark:text-slate-400">
        {post.description}
      </p>
      <Badge>{format(parseISO(post.date), "LLLL d, yyyy")}</Badge>
    </div>
  );
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Root>
      <StickyHeader />
      <MiddlePanel>
        <TypographyH1>Blog</TypographyH1>
        <TypographyLead>{"Thoughts on what I've been up to."}</TypographyLead>
        <div className="mt-6" />
        <div>
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </MiddlePanel>
    </Root>
  );
}
