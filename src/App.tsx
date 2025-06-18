import Box from 'carbon-react/esm/components/box';
import Typography from 'carbon-react/esm/components/typography';
import Message from 'carbon-react/esm/components/message';
import Button from 'carbon-react/lib/components/button';

const App = () => {
  return (
    <>
      <Box
        margin="var(--spacing200)"
        display="flex"
        flexDirection="column"
        gap="var(--spacing200)"
        minWidth="320px"
        maxWidth="1024px"
      >
        <Typography variant="h1">Hello Carbon 👋</Typography>
        <Message variant="warning">
          <Typography variant="b" m={0}>
            Edit the <code>package.json</code> file manually and reinstall to
            update the versions of any packages if needed.
          </Typography>
        </Message>
      </Box>
      <Box>
        <Button
          onClick={() => console.log('Exporting')}
          buttonType="tertiary"
          iconType="export"
        >
          Export
        </Button>
      </Box>
    </>
  );
};
export default App;
