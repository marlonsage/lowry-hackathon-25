import ReactMarkdown from 'react-markdown';

type TMarkdownRendererProps = {
    content: string;
}
export default function MarkdownRenderer({ content } : TMarkdownRendererProps) {
  return (
    <div className="markdown-tile" >
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}
