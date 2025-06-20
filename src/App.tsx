import React, { useState } from 'react';
import Box from 'carbon-react/esm/components/box';
import { Header } from './components/Header';
// import FileInput from 'carbon-react/lib/components/file-input';
import MarkdownRenderer from './components/MarkdownRenderer';
import Button from 'carbon-react/esm/components/button';
import Textbox from 'carbon-react/lib/components/textbox';

const App = () => {
  const [state, setState] = useState('');
  const [messageResponse, setMessageResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const setValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  const handlePostMessage = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessageResponse((prev) => [...prev, data]);
      setState(''); // Clear the input after submission
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Network response was not ok');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} maxWidth={'100vw'}>
        <Box
          width={'100%'}
          minHeight={'100dvh'}
          maxWidth="1024px"
          display={'grid'}
          gridTemplateRows={'auto 1fr'}
        >
          <Header />
          {messageResponse.length > 0 && (
            <Box mt={4} mb={4}>
              {messageResponse.map((msg, index) => (
                <MarkdownRenderer key={index} content={msg} />
              ))}
            </Box>
          )}
          <Box mt={4} mb={4}>
            {/* <Box>
              <FileInput
                maxWidth= "100%"
                label="Please upload a PRD"
                onChange={() => {}}
              />
            </Box> */}
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={4}
              mt={4}
            >
              <Box width={'90%'}>
                <Textbox width={'100%'} value={state} onChange={setValue} />
              </Box>
              <Box>
                <Button
                  buttonType="primary"
                  size="medium"
                  onClick={handlePostMessage}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default App;
