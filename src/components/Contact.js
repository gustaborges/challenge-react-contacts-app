import React from 'react';
import defaultAvatar from "../assets/img/default-profile.jpg";

function Contact({avatarUrl, name, phone, country, admissionDate, company, department}) {


    return (
      <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <AvatarImage url={avatarUrl ? avatarUrl : defaultAvatar} alt={ name + "'s Profile Picture" }/>
      </span>
      <span className="contact__data" data-testid="contact-name">{ name }</span>
      <span className="contact__data" data-testid="contact-phone">{ phone }</span>
      <span className="contact__data" data-testid="contact-country">{ country }</span>
      <span className="contact__data" data-testid="contact-company">{ admissionDate }</span>
      <span className="contact__data" data-testid="contact-department">{ company }</span>
      <span className="contact__data" data-testid="contact-date">{ department }</span>
    </article>
    );


  function AvatarImage({url, alt}) {
    return (<img src={ url } alt={ alt }></img>);
  }
}

export default Contact;
