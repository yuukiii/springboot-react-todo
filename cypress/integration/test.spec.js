const apiUrl = `${Cypress.env("apiUrl")}`

describe('Backend Test Spec', () => {

  it('should call ping', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/ping`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

describe('Should Search Test Spec', () => {
  it('should search all', () => {
    cy.visit('/')
  })

})


describe('Search Test Spec', () => {
  it('should search all', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: `${apiUrl}/users/`,
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
