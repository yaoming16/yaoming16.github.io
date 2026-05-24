import { useRef, useEffect } from "react";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkGithubAlerts from "remark-github-alerts";
import mermaid from "mermaid";
import rehypeSlug from "rehype-slug";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import s from "../../styles/Markdown.module.css";

//react-syntax-highlighter configuration
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import md from "react-syntax-highlighter/dist/esm/languages/prism/markdown";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("md", md);

// Initialize mermaid theme to match your dark mode
mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
});

function MermaidDiagram({ chart }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    if (containerRef.current && chart) {
      mermaid
        .render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
        .then(({ svg }) => {
          if (isMounted && containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        })
        .catch(console.error);
    }

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div
      ref={containerRef}
      style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}
    />
  );
}

function MyMarkDown({ children }) {
  return (
    <div className={s.markdown}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkGithubAlerts]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;

            // Extract the full match after "language-" (e.g. "js_showLineNumbers")
            const match = /language-(\w+)/.exec(className || "");

            // 1. Handle Mermaid diagrams if language is explicitly marked as mermaid
            if (match && match[1] === "mermaid") {
              return (
                <MermaidDiagram chart={String(children).replace(/\n$/, "")} />
              );
            }

            // If we have a match, split the options for the syntax highlighter
            const options = match ? match[1].split("_") : [];
            const lang = options[0]; // e.g., "js" The FIRST block match

            // 1.5 Render Markdown examples as plain text to preserve formatting (tables in particular)
            // Prism's markdown grammar tokenizes tables with classes like `table`, which can conflict with site CSS.
            if (lang === "md" || lang === "markdown") {
              return (
                <pre className={className} style={{ margin: "1.5rem 0" }}>
                  <code {...rest} style={{ whiteSpace: "pre" }}>
                    {String(children).replace(/\n$/, "")}
                  </code>
                </pre>
              );
            }

            // Check for showLineNumbers either in the underscore format or standard meta
            const metaString = node?.data?.meta || "";
            const hasLineNumbers =
              options.includes("showLineNumbers") ||
              options.includes("linenumbers") ||
              metaString.includes("showLineNumbers");

            // 2. Handle generic Syntax Highlighting
            if (match) {
              return (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={lang}
                  style={vscDarkPlus}
                  showLineNumbers={hasLineNumbers}
                  customStyle={{
                    margin: "1.5rem 0",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color, #3e3e42)",
                  }}
                />
              );
            }

            // 3. Handle Inline Code (single backticks)
            return (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}

export default MyMarkDown;
