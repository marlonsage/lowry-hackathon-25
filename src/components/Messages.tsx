import Card from 'carbon-react/esm/components/card';

type TMessagesProps = {
  messages: {
    role: 'user' | 'assistant';
    content: string;
  }[];
};

export const Messages = ({ messages }: TMessagesProps) => {
  return (
    <>
      {messages.map((msg, idx) => (
        <Card key={idx}>
          <div
            className={`text-${msg.role === 'user' ? 'blue' : 'green'}-700 font-semibold`}
          >
            {msg.role === 'user' ? 'You' : 'Assistant'}
          </div>
          <div className="mt-1 text-gray-900">{msg.content}</div>
        </Card>
      ))}
    </>
  );
};
