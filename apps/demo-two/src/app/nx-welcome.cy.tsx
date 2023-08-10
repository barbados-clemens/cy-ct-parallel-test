import * as React from 'react';
import NxWelcome from './nx-welcome';

describe(NxWelcome.name, () => {
  it('renders', () => {
    cy.mount(<NxWelcome title="demo-two-cy" />);
    cy.get('h1').contains('Welcome demo-two-cy');
  });
});
