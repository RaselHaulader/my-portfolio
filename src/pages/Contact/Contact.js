import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(form.current)
        emailjs.sendForm('service_w3z3wvb', 'template_ilu1mb9', form.current, 'user_UDPjpjTCty7OiqgJruKyI')
            .then((result) => {
                window.alert('Thanks for your message. I will reply very soon.')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div id="contact" className="py-5 contact-section container-fluid">
                <div className="hr-cap m-auto text-center text-white contact-header">
                    <div className="about-me-title text-center  pt-4"
                        style={{ color: "rgba(242, 232, 232, 0.946)", textTransform: "uppercase" }}>
                        <h3>Contact <span style={{ color: "rgba(139, 179, 238, 0.979)" }}>ME</span></h3>
                        <div className="hr-container">
                            <hr className="hr-a" /><i className="fab fa fa-lightbulb-o"></i>
                            <hr className="hr-a" />
                        </div>
                    </div>
                    <p className="caption">Send me a Massage</p>
                </div> <br />

                <div  className="contact-row">
                    <div data-aos="zoom-in-right" className="contact-item">

                        <h2>Getting in touch is easy!</h2>
                        <p>Airport Road, Sadar, Jashore</p>

                        <p>Phone: +88O1985525743</p>

                        <p id='whatsApp'>WhatsApp: O1985525743</p>

                        <p>Email: hauladerrasel2@gmail.com</p>

                        <a href="https://web.facebook.com/mdraselhaulader01"><i className="fa fah fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/md-rasel-haulader-109280218/"><i className="fa fah fa-linkedin"></i></a>
                        <a href="https://github.com/RaselHaulader"><i className="fa fah fa-github"></i></a>
                        <a href="#whatsApp"><i className="fa fah fa-whatsapp"></i></a>

                    </div>

                    <form data-aos="zoom-in-left" onSubmit={sendEmail} ref={form} className="contact-item">
                        <input required placeholder="Your Name" name="user_name" type="text" />
                        <input required placeholder="Your email" name="user_email" type="email" />
                        <textarea required className="textarea" name="message" placeholder="Write our Massage"></textarea>
                        <input type='submit' className="msg-btn" value="Send Message"></input>
                    </form>
                </div>
                <small className='text-center pt-5'>All Right reserved by ©rasel 2021</small>
            </div>
           
        </div>
    );
};

export default Contact;