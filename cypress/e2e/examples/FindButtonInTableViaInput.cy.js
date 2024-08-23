describe('Find Button in Table via Input', () => {



it('Click edit button wrong', () => {
    let name = "radiology";

    cy.visit('http://localhost:4200/petclinic/specialties');

    cy.get('table tbody tr').each(($row, index, $rows) => {
        cy.wrap($row).find('input').then($input => {
            cy.wrap($input)
                .invoke('val')
                .then((value) => {
                    if (value === name) {
                        cy.log(" ### Edit - " + value);
                        cy.wrap($row).find('td').eq(1).contains('Edit').click();
                    } else {
                        cy.log(" ## Wrong Item - " + value);
                    }
                });
        });
    })
})


    it('Click edit button correct', () => {
        let name = "radiology";

        cy.visit('http://localhost:4200/petclinic/specialties');

        cy.get('table tbody tr').each(($row, index, $rows) => {

            cy.wrap($row).as('currentRow');

            cy.get('@currentRow').find('input').invoke('val').then((inputValue) => {
                if (inputValue == name) {
                
                    cy.wrap($row).contains('Edit') .should('exist').as('editButton');

                  }
                });
              });

              cy.get('@editButton').click();
    })
})  