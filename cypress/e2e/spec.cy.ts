describe('example spec', () => {
  it('passes', () => {
    cy.visit('/')
  });
  it('passes', () => {
    cy.request('api/hello')
  });
})