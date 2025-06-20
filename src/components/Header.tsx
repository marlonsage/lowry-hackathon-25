import Box from 'carbon-react/esm/components/box';
import Heading from "carbon-react/lib/components/heading";

export const Header = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} paddingY={4}>
      <Box>
         <Heading headingType="h1" title="Spec Story" />
      </Box>
    </Box>
  );
};
