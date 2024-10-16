import Head from "next/head";
import { allPosts, Post } from "contentlayer/generated";
import { Root } from "@/components/layouts/root";
import { MiddlePanel } from "@/components/layouts/middle-panel";
import StickyHeader from "@/components/layouts/sticky-nav";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { TypographyP } from "@/components/ui/typography";
import { Mdx } from "@/components/ui/mdx-components";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  return (
    <Root>
      <Head>
        <title>{post.title}</title>
      </Head>
      <StickyHeader />
      <MiddlePanel>
        <TypographyH1>{post.title}</TypographyH1>
        <TypographyLead>{post.description}</TypographyLead>
        <Mdx code={post.body.code} />
      </MiddlePanel>
    </Root>
  );
};

export default PostLayout;
