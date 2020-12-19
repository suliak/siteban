import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import defaultBlacklists from './default_blacklists.json';

import App from './App';

describe('App.js', () => {
  it('renders', () => {
    const { getByText } = render(App, { blacklists: defaultBlacklists })
    expect(getByText('Siteban')).toBeInTheDocument();
  })
})

