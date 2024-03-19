describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/DamageRoadInspection_Web/Login')
    })
    it('passes', () => {
        cy.wait(10000)
        cy.get('input#Input_UsernameVal').type('superadminDRI@mailinator.com')
        cy.get('input#Input_PasswordVal').type('123456')
        cy.get('.btn.btn-primary.OSFillParent').click()
        cy.wait(3000)

        cy.fixture('picture.jpg').then(fileContent => {
          const longitude = "106.66706469416903"
          const latitude = "-6.299076969755727"
          const dateTime = '2024-03-14 11:00:00'
          const classid = '2'
          const classlabel = ''
          const devicecode = 'A-1'

          cy.request({

            method: 'POST',
            url: 'https://samaktamitrapt-dev.outsystemsenterprise.com/DamageRoadInspection_Web/rest/RoadDamageData/SaveSingleDamage?Long='+longitude+'&Lat='+latitude+'&Foto='+'&DateTime='+dateTime+'&ClassID='+classid+'&ClassLabel='+classlabel+'&DeviceCode='+devicecode, // Ganti URL dengan URL endpoint yang sesuai
            headers: {
              'Content-Type': 'image/jpeg', // Gunakan tipe konten multipart/form-data
              // Jika diperlukan, tambahkan header lain yang diperlukan untuk otentikasi atau otorisasi
            },
            body: {
              file: {
                value: fileContent,
                options: {
                  filename: 'picture.jpg',
                  contentType: 'image/jpeg' // Tentukan jenis konten file
                }
              }
            },
            timeout: 10000, // Timeout dalam milidetik, sesuaikan sesuai kebutuhan
          }).then(response => {
            expect(response.status).to.eq(200); // Pastikan respons status 200 (sukses)
            // Tambahkan asserstions tambahan sesuai kebutuhan berdasarkan respons dari server
          });
        });
        cy.reload()
    })
  })

  