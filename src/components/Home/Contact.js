import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__main">
                    <div className="contact__text">
                        <h3>Let us handle your project, professionally.</h3>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="contact__form">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name/Company Name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                            </div>
                            <button className="common-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;