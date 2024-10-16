import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

/**
 * Document schema. A document is an individual piece of
 * content that Contentlayer transforms into data you can use in your components.
 */
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "Short description of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
      description: "Badges for the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./posts",
  documentTypes: [Post],
  mdx: {
    remarktPlugins: [remarkGfm], // enable GitHub Flavored Markdown
    rehypePlugins: [
      rehypePrettyCode, // enable syntax highlighting
      {
        theme: "github-dark",
        onVisitLine(node) {
          // Prevent lines from collapsing in `display: grid` mode, and allow empty
          // lines to be copy/pasted
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push("line--highlighted");
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ["word--highlighted"];
        },
      },
    ],
  },
});
