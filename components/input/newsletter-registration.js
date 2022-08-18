import { useRef, useState } from 'react';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const userEmail = emailRef.current.value;
    // optional: validate input
    if (!userEmail || userEmail.trim() === '' || !userEmail.includes('@')) {
      setIsInvalid(true);
      return;
    }
    // send valid data to API
    const newEmail = {
      email: userEmail,
    };

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(newEmail),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
          {isInvalid && <p>Invalid Email, try again.</p>}
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
