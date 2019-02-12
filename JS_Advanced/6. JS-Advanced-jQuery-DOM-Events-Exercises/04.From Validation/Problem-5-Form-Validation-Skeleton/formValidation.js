function validate() {
    let userName = $('#username')
    let email = $('#email')
    let pwd = $('#password')
    let cfmPwd = $('#confirm-password')
    let checkBox = $('#company')
    let company = $('#companyNumber')
    let userRgx = /\b[a-zA-Z0-9]{3,20}\b/
    let pwdRgx = /\w{5,15}/
    let emailRgx = /\w+@.*\.+/
    let validUserr = true
    let validPwdd = true
    let validCfmPwdd = true
    let validEmaill = true
    let validCompNumber = true
    checkBox.on('change',
        () => {
            if (checkBox.is(':checked')) {
                $('#companyInfo').show()

            } else {
                $('#companyInfo').hide()

            }
        })
    $('#submit').on('click',
        (ev) => {
            ev.preventDefault()
            validate()
            if (!validUserr || !validEmaill
                || !validPwdd || !validCfmPwdd || !validCompNumber) {
                $('#valid').css('display', 'none')
            } else {
                $('#valid').css('display', 'block')
            }

        })

    function validate() {
        let validUser = () => {
            if (userRgx.exec(userName.val()) === null) {
                validUserr = false
                userName.css('border', '2px solid red')
            } else {
                validUserr = true
                userName.css('border', 'none')
            }
        }
        let validPwd = () => {
            if (pwdRgx.exec(pwd.val()) !== null && pwd.val() === cfmPwd.val()) {
                validPwdd = true
                pwd.css('border', 'none')
            } else {
                validPwdd = false
                pwd.css('border', '2px solid red')
            }
        }
        let pwdMatch = () => {
            if (pwdRgx.exec(cfmPwd.val()) !== null && cfmPwd.val() !== '' && pwd.val() === cfmPwd.val()) {
                validCfmPwdd = true
                cfmPwd.css('border', 'none')
            } else {
                validCfmPwdd = false
                cfmPwd.css('border', '2px solid red')
            }
        }
        let validEmail = () => {
            if (emailRgx.exec(email.val()) === null) {
                validEmaill = false
                email.css('border', '2px solid red')
            } else {
                validEmaill = true
                email.css('border', 'none')
            }
        }
        if (checkBox.is(':checked')) {
            let checked = () => {
                for (let i = 1000; i < 10000; i++) {
                    if (i === +company.val()) {
                        validCompNumber = true
                        break
                    }
                    validCompNumber = false

                }
                if (!validCompNumber || company.val() === '') {
                    company.css('border', '2px solid red')
                } else {
                    company.css('border', 'none')
                }
            }
            checked()
        } else {
            validCompNumber = true
            company.css('border', 'none')
        }
        validUser()
        validEmail()
        validPwd()
        pwdMatch()
    }
}
