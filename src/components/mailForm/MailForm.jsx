import "./FooterMailForm.css"
import * as yup from "yup"
import { useSnackbar } from "notistack"
import { useTranslation } from 'react-i18next'
import { Form, Formik, Field, ErrorMessage } from "formik"
import emailjs from "emailjs-com"

import * as Styled from './StyledMailForm'
import { Button, makeStyles, TextField } from "@material-ui/core"
import InputAdornment from "@material-ui/core/InputAdornment"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import TitleIcon from "@material-ui/icons/Title"
import DescriptionIcon from "@material-ui/icons/Description"

const useStyles = makeStyles(() => ({
  inputField: {
    width: "100%",
    height: "47px",
    color: "#006737",
    marginTop: "25px",
    fontFamily: "GeorgianFont",
    ['@media(max-width: 600px)'] : {
      width: '70%',
    }
  },
  messageInputField: {
    width: "100%",
    height: "47px",
    color: "#006737",
    margin: "35px 0 170px 0",
    fontFamily: "GeorgianFont",
    ['@media(max-width: 600px)'] : {
      width: '70%',
    }
  },
  sendButton: {
    color: "white",
    fontFamily: "GeorgianFont",
    fontSize: "16px",
    letterSpacing: '2px',
    backgroundColor: "#006737",
    width: "60%",
    height: "44px",
    textTransform: "uppercaseGeorgianFont",
    marginTop: "40px",
    cursor: "pointer",
    alignSelf: 'flex-end',
    ['@media(max-width: 1080px)'] : {
      width: '100%',
      alignSelf: 'none',
    },
    ['@media(max-width: 600px)'] : {
      width: '70%',
      alignSelf: 'center',
    }
  },
}));

const MailForm = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { enqueueSnackbar } = useSnackbar()

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(`${t('emailNameError[0]')}`)
      .max(25, `${t('emailNameError[1]')}`),
    email: yup.string().required(`${t('emailError')}`).email(),
    subject: yup
      .string()
      .required(`${t('emailSubjectError[0]')}`)
      .max(35, `${t('emailSubjectError[1]')}`),
    message: yup.string().required(`${t('emailContentError')}`),
  });

  function handleSend(e, options) {
    const form = document.getElementById('form')
    emailjs
      .sendForm(
        "agroport__form",
        "template_ldi3n0o",
        form,
        "user_Ja49xauTbF1QIORzUeOdI"
      )
      .then(
        (result) => {
          enqueueSnackbar(`${t('emailSentMessage')}`, {
            variant: "success",
          });
          options.resetForm();
        },
        (error) => {
          enqueueSnackbar(`${t('emailFailedMessage')}`, {
            variant: "error",
          });
        }
      );
  }

  const costumeInputName = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        error={touched.name && errors.name ? true : false}
        className={classes.inputField}
        variant="outlined"
        label={t('emailName')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon style={{ color: "#006737" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  const costumeInputEmail = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.email && errors.email ? true : false}
        className={classes.inputField}
        variant="outlined"
        label={t('email')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon style={{ color: "#006737" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  const costumeInputSubject = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.subject && errors.subject ? true : false}
        className={classes.inputField}
        variant="outlined"
        label={t('emailSubject')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TitleIcon style={{ color: "#006737" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  const costumeInputMessage = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.message && errors.message ? true : false}
        className={classes.messageInputField}
        variant="outlined"
        label={t('emailContent')}
        multiline
        rows={10}
        placeholder="..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DescriptionIcon style={{ color: "#006737" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  return (
      <div className="footerFrom__wrapper">
        <h3>{t('emailHeader')}</h3>   
        <Styled.MailFormTextWrapper>
          <Styled.MailFormText>{t('receiver')}: info@agroport.ge</Styled.MailFormText>  
        </Styled.MailFormTextWrapper>        
        <Formik
          enableReinitialize
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          onSubmit={handleSend}
          validationSchema={validationSchema}
        >
          <Form className="footerFrom__form" id="form">            
            <div className='footerFrom__leftSide'>
                <Field name="name" component={costumeInputName} id='footerMailForm'/>
                <ErrorMessage
                className='footerFrom__errorMessage'
                name="name"
                component="div"
                />
                <Field name="email" component={costumeInputEmail} />
                <ErrorMessage
                className='footerFrom__errorMessage'
                name="email"
                component="div"
                />
                <Styled.MailFormEmailInputText>{t('emailWarning')}</Styled.MailFormEmailInputText>
            </div>   
            <div className='footerForm__rightSide'>
                <Field name="subject" component={costumeInputSubject} />
                <ErrorMessage
                className='footerFrom__errorMessage'
                name="subject"
                component="div"
                />
                <Field name="message" component={costumeInputMessage} />
                <ErrorMessage
                className='footerFrom__errorMessage'
                name="message"
                component="div"
                />
                <Button
                variant="contained"
                className={classes.sendButton}
                type="submit"
                >
                  {t('emailSend')}
                </Button>
            </div>
          </Form>
        </Formik>
      </div>
  );
};

export default MailForm;
