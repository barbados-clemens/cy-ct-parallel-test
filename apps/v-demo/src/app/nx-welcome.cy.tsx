import * as React from 'react';
import NxWelcome from './nx-welcome';

describe(NxWelcome.name, () => {
  it('renders', () => {
    cy.mount(<NxWelcome title="v-demo cy" />);
    cy.get('h1').should('contain.text', 'Welcome v-demo cy');
  });
});
