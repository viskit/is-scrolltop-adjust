Cypress.Commands.add(
  'ionicDrag',
  { prevSubject: true },
  (subject, { timeout = 600, offsetX = 0, offsetY = 100 }) => {
    const { x, y, width, height } = subject[0].getBoundingClientRect();
    const startX = x + width / 2;
    const startY = y + height / 2;

    cy.wrap(subject).trigger('mousedown', {
      which: 1,
      pageX: startX,
      pageY: startY,
    });
    cy.wait(50);
    cy.wrap(subject).trigger('mousemove', {
      which: 1,
      pageX: startX,
      pageY: startY + 15,
    });
    cy.wait(timeout);

    cy.document().trigger('mousemove', {
      which: 1,
      pageX: startX + offsetX / 3,
      pageY: startY + offsetY / 3,
    });
    cy.wait(50);
    cy.document().trigger('mousemove', {
      which: 1,
      pageX: startX + (2 * offsetX) / 3,
      pageY: startY + (2 * offsetY) / 3,
    });
    cy.wait(50);
    cy.document().trigger('mousemove', {
      which: 1,
      pageX: startX + offsetX,
      pageY: startY + offsetY,
    });
    cy.wait(300);

    cy.document().trigger('mouseup', {
      which: 1,
      pageX: startX + offsetX,
      pageY: startY + offsetY,
    });
  }
);
