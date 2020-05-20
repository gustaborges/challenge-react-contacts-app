import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super();
    this.avatarUrl = props.avatarUrl;
    this.hasAvatar = props.avatarUrl !== undefined;
    this.name = props.name;
    this.phone = props.phone;
    this.country = props.country;
    this.admission = props.admission;
    this.company = props.company;
    this.department = props.department;
  }

  render() {
    return (
      <article className="contact">
      <span className="contact__avatar">
        <img src={ this.avatarUrl } alt={ this.name + "'s Profile Picture" }></img>
      </span>
      <span className="contact__data">{ this.name }</span>
      <span className="contact__data">{ this.phone }</span>
      <span className="contact__data">{ this.country }</span>
      <span className="contact__data">{ this.admission }</span>
      <span className="contact__data">{ this.company }</span>
      <span className="contact__data">{ this.department }</span>
    </article>
    );
  }
}


export default Contact;
