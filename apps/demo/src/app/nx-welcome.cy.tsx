import * as React from 'react';
import NxWelcome from './nx-welcome';

describe(NxWelcome.name, () => {
  it('renders', () => {
    cy.mount(<NxWelcome title="cy-demo" />);
    cy.get('h1').should('contain.text', 'Welcome cy-demo');
  });
});
