import React, {useState , useEffect} from 'react'

function TimeCounter() {
  const countDownDate = new Date("Feb 24, 2024 00:00:00").getTime();

    const [countdownTime, setCountdownTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setCountdownTime({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);
  return (
    <section id="timer" className="mt-3">
        <h1 className="titleHead text-center mt-4">RESONANCE 2024 START IN</h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-11 col-md-8">
              <div className="row">
                <div className="col-3 text-center">
                  <h1 id="days" className="clock-timer">
                    {countdownTime.days}
                  </h1>
                  <p className="clock-head">Days</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="hours" className="clock-timer">
                    {countdownTime.hours}
                  </h1>
                  <p className="clock-head">hours</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="minutes" className="clock-timer">
                  {countdownTime.minutes}
                  </h1>
                  <p className="clock-head">minutes</p>
                </div>
                <div className="col-3 text-center">
                  <h1 id="seconds" className="clock-timer">
                  {countdownTime.seconds}
                  </h1>
                  <p className="clock-head">seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="timer-btn">
          <button className="ticket-btn" type="button">
            BUY TICKET
          </button>
        </div> */}
      </section>
  )
}

export default TimeCounter