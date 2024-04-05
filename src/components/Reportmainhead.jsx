// import scopeimg from "../assets/report/report.png";
import lows from "../assets/report/genratedlowsoot.png";
export function Reportmainhead() {
  return (
    <div className="reportmaincont__header">
      <div className="reportmaincont__genratedby">
        <div className="reportmaincont__genratedhead">
          <p className="reportmaincont__genratedheadname">Generated by</p>
          <img
            className="reportmaincont__genratedheadimg"
            src={lows}
            alt="lowsoot"
          />
        </div>
        <p className="reportmaincont__genratedmessage">
          This BRSR report consists of data about emissions of a company defined
          according to UNCC standards. For any queries contact through below
          details.
        </p>
        <div className="reportmaincont__contacts">
          <div className="reportmaincont__email">
            <p className="reportmaincont__contactlabel">Email</p>
            <p className="reportmaincont__contactdata">hello@atomicrabbits.com</p>
          </div>
          <div className="reportmaincont__phone">
            <p className="reportmaincont__contactlabel">Phone Number</p>
            <p className="reportmaincont__contactdata">+91 6386098082</p>
          </div>
          <div className="reportmaincont__address">
            <p className="reportmaincont__contactlabel">Address</p>
            <p className="reportmaincont__contactdata">
            Jaipur-Ajmer Express Highway,
              <br />  Dehmi Kalan, Near GVK Toll Plaza,
              <br />  Jaipur, Rajasthan 303007 IN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportmainhead;
