describe('empty spec', () => {
  it('Será que deu certo?', () => {
    cy.visit('https://google.com.br')
  })
  it('Deu certo', () => {
    cy.get('input[name=q]').type('robo aspirador que limpa e passa pano')
  })
  it('Apertou o botão', () => {
    cy.get('form').submit()
  })
  it('Entrou na pagina', () => {
    cy.contains('Robô Aspirador').click()
  })
})