import React from 'react'

export const Contact = () => {
  return (
    <>
 <div className="contact" id="contact">
        <div className="futureDetails">
            <h2 className="HowerMe">Get a quote <img
                src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-contact-us-contact-and-message-itim2101-flat-itim2101-1.png"
                alt="contact" />
            </h2>

            <p>Fill up the form and we will get back to you within 24 hours</p>
            <br />

            <br />
            <img src="https://img.icons8.com/fluency/24/000000/phone.png" aria-label="contact" alt="contact" />
            82590 53265
            <br />
            <img src="https://img.icons8.com/fluency/24/000000/email-open.png" aria-label="mail" alt="mail" />
            rahulsah6003@gmail.com
            <br />
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="24" viewBox="0 0 172 172"
                style={{ fill: "#000000" }}>
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                    strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                    fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                    style={{ mixBlendMode: "normal" }}>
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#3498db">
                        <path
                            d="M86,3.44c-30.34187,0 -55.04,24.69813 -55.04,55.04c0,48.54969 50.32344,106.45188 52.46,108.8975c0.65844,0.7525 1.58563,1.1825 2.58,1.1825c1.06156,-0.06719 1.92156,-0.43 2.58,-1.1825c2.13656,-2.48594 52.46,-61.3825 52.46,-108.8975c0,-30.34187 -24.69812,-55.04 -55.04,-55.04zM86,41.28c11.395,0 20.64,9.245 20.64,20.64c0,11.395 -9.245,20.64 -20.64,20.64c-11.395,0 -20.64,-9.245 -20.64,-20.64c0,-11.395 9.245,-20.64 20.64,-20.64z">
                        </path>
                    </g>
                </g>
            </svg> Tinsukia (Assam) India

            <br />
            <br />
        </div>
        <div className="formitems">
            <label htmlFor="name">Full Name</label>
            <br />
            <input type="text" id="name" placeholder="Your Name" autoCapitalize="none" autoComplete="off" required />
            <br />
            <br />
            <label htmlFor="email">Mail</label>
            <br />
            <input type="email" placeholder="Your Email" autoCapitalize="none" autoComplete="off" id="email"
                required />
            <br />
            <br />

            <label htmlFor="comment">Comment</label>
            <br />
            <textarea name="comment" id="comment" cols="30" placeholder="Please type your message for me"
                rows="5"></textarea>
            <br />
            <br />
            <button className="submit" id="InsBtn">Send message</button>
        </div>
    </div>
    </>
  )
}
