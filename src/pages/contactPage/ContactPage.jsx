import React, { useEffect } from 'react'

import MailForm from 'components/mailForm/MailForm'

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <MailForm />
    )
}

export default ContactPage