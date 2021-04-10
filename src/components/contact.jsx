import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_1sb6a0i', 'template_x97lb1h', e.target, 'user_cO7i9lY0LQpelKqXwQnB7'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{' '}
                  {props.data ? props.data.email : 'loading'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 MarcAureleBesner.com &nbsp;
            <a href='https://github.com/marc-aurele-besner/marcaurelebesner.com' rel='nofollow'>
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}