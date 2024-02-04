import React from 'react'

const Accommodation = () => {
  return (
    <section id="accommodation" className='mt-5' >
        <h1 className="titleHead small-title-head text-center my-5 pt-lg-5">Accommodation</h1>
        <div className="container d-flex justify-content-center mt-5" id="about">
            <div>
            <p>Welcome to Resonance 2K24, where innovation meets tradition in a vibrant celebration of knowledge and creativity. As you prepare to immerse yourself in this extraordinary event, we're here to ensure your stay is comfortable and convenient. </p>
            <h5 className='text-danger'>For Our Esteemed Guests:</h5>
            <p><span className='text-light'>Girls : </span>Experience the comfort and safety of our dedicated Girls' Hostel. Designed with your security and convenience in mind, the hostel offers a serene and supportive environment for you to relax and recharge after a day full of engaging activities and learning opportunities. </p>
            <p><span className='text-light'>Boys : </span>The Common Halls provide a robust and interactive living arrangement for male participants. These spaces are designed to foster camaraderie, networking, and rest, ensuring you remain energized and connected throughout the event. </p>
            <h5 className='text-danger'>Important Note for Accommodation Registration:</h5>
            <p>To secure your accommodation on campus, both students and faculty members are required to register. Please use the link provided below and ensure to register with your college-issued email ID. This step is crucial for verifying your affiliation and facilitating a smooth accommodation process.</p>
            <p>We look forward to welcoming you to our campus and hope you will have a memorable and enriching experience at Resonance 2K24. If you have any questions or need further assistance with your accommodation needs, please do not hesitate to reach out to us.
add contact details of vedant and anuj</p>
            <a href="tel:+917229090573" className='text-decoration-none mt-5'>
                <p>Vedant Gurjar <br/>+91 72290 90573</p>
            </a>
            <a href="tel:+917357147049" className='text-decoration-none mt-5'>
                <p>Anuj Mathur <br/>+91 73571 47049</p>
            </a>
            <div className="d-flex justify-content-center my-5">
                <a href='https://forms.gle/j8GdQnZkKkgHSwtJ8'>
                    <button id="about-rugistar" type="button">
                        Accommodation
                    </button>
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Accommodation