import { createRoot } from 'react-dom/client';

import CarbonProvider from 'carbon-react/lib/components/carbon-provider';
import sageTheme from 'carbon-react/lib/style/themes/sage';
import GlobalStyle from 'carbon-react/lib/style/global-style';
import 'carbon-react/lib/style/fonts.css';

import App from './App';

const root = createRoot(document.getElementById('app')!);

root.render(
  <>
    <GlobalStyle />
    <CarbonProvider validationRedesignOptIn theme={sageTheme}>
      <App />
    </CarbonProvider>
  </>
);
