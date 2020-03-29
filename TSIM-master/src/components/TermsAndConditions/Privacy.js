import React, { Component } from "react";
import styles from "./Terms.css";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FooterContainer from "../Footer/FooterContainer";

export default class PrivacyPolicy extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      window.scroll({
        top: -200
      });
    }, 10);
  };

  handleBackToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>{" "}
        <div className={styles.base}>
          <div className={styles.container}>
            <h2>Privacy Policy</h2>
            <p>
              This Privacy Policy provides information about how Femmevista
              Technologies Private Limited, a company incorporated under the
              Companies Act, 2013 having its registered office at 8th Floor,
              SLN Terminus, Survey No 133, Beside Botanical Gardens, Gachibowli,
              Hyderabad, India-500032, (the “<b>Femmevista</b>") collects, uses,
              stores, archives and transfers information/data (used
              interchangeably hereafter) from you, through your use of “the Star
              in Me” platform which is accessible through its website
              www.thestarinme.com or by downloading it as a mobile application
              (collectively hereinafter referred to as “<b>Platform</b>”). The
              Platform is a professional network and online platform
              specifically designed only for women. Women professionals through
              the Platform can find business and professional opportunities,
              create networks for business with like-minded professionals and
              seek career and skill guidance (“<b>Services</b>”).
            </p>

            <h3>SCOPE</h3>
            <p>
              Femmevista recognizes the importance of maintaining your privacy.
              We value your privacy and appreciate your trust in us. In this
              Privacy Policy, references to “you”, “your” or “user” shall mean
              the end user accessing and using the Platform, its contents and
              using the Services offered through the Platform. References to
              “we”, “us” and “our” shall mean Femmevista, its affiliates and
              partners.
              <br /> This Privacy Policy covers only data collected and
              processed through the Platform and not any other data collection
              or processing, including, without limitation to data collection
              practices of other mobile applications that are linked to the
              Platform or data that is collected offline or through third party
              web sites, product offerings , or services offered or belonging to
              third parties. Occasionally, reference would be made to this
              Privacy Policy in notices and consent requests related to specific
              surveys, ratings or other modalities present in the Platform.{" "}
              <br />
              By subscribing to the Platform and using our Services, you hereby
              agree and consent to us collecting, storing, processing and
              transmitting your personal data for the below mentioned purposes.
              You acknowledge, consent and agree that Femmevista may access,
              preserve or disclose your Personal Information (specified below),
              if required to do so by law or in good faith, believing that such
              access, preservation or disclosure is reasonably necessary to
              comply with legal process or the order of any government
              authority. You have the option to withdraw your consent or to
              opt-out of the services being provided by the Platform. In case of
              such withdrawal and/or opt-out you will not be able to have access
              to the Platform and related services.
              <br />
              In case you want to opt-out or un-install the Platform from your
              mobile device, it will not result in the deletion of your
              information from the Platform and you will have to send an email
              to{" "}
              <a href="mailto: support@thestarinme.com">
                support@thestarinme.com
              </a>{" "}
              if you wish to have all your information deleted from the Platform
              databases and servers.
            </p>

            <h3>
              TYPES OF PERSONAL DATA AND INFORMATION COLLECTED BY US AND
              COLLECTION METHODS
            </h3>
            <p>
              The following instances are when we collect data from you (i)
              when you request for information; (ii) when you register as a user
              ;(iii) when you apply to use or participate in or subscribe to the
              Services offered through the Platform; (iv) when you submit any
              content on the Platform; or (v) otherwise actively send data
              through/using the Platform. Femmevista will collect, use, store
              and archive information about you in the following general
              categories:
            </p>

            <h4>
              <u>Information You Provide to Us on Registration</u>
            </h4>

            <p>
              <ul>
                <li>
                  <u>
                    <b>Sign-up</b>: To create an account on the Platform, you
                    will need to provide your name, phone number, password and
                    confirmation of your gender. A verification code will be
                    sent to your phone number for confirmation, post which your
                    account will be registered on the Platform.
                  </u>
                </li>
                <li>
                  <b>
                    <u>Profile</u>
                  </b>
                  : You will be required to provide your name, email id and your
                  city for creating a profile on the Platform. In relation to
                  other information on your profile, such as profile picture,
                  education, skills, work experience, profile video, social
                  media links etc., you have choices about the information you
                  provide and you don’t have to necessarily provide additional
                  information. However, profile information helps you to get
                  more from our Services and the absence of the requisite
                  information on your profile may limit your ability to use our
                  Services to grow your network.
                </li>
                <li>
                  <u>
                    <b>Information you post</b>
                  </u>
                  : We collect Personal Data from you, when you provide it
                  through uploads and posts on the Platform, such as your
                  resume, photographs, etc.
                </li>
              </ul>{" "}
              <h4>
                <u>Information we collect through your use of the Platform</u>
              </h4>
              <ul>
                <li>
                  <b>
                    <u>Usage and Preference Information</u>
                  </b>
                  : The Platform may access information about your interactions
                  on the Platform such as the date and time you use the Platform
                  and the settings you have chosen. The Platform uses cookies,
                  device finger printing, open device identifier number or
                  similar technologies to collect the information under this
                  category. The Platform may use the above mentioned
                  technologies to: (i) provide you with customized content on
                  the Platform; (ii) monitor the Platform usage; (iii) improve
                  the content and services provided on and through the Platform
                  and (iv) otherwise enhance user experience.
                </li>
                <li>
                  <u>
                    <b>Device Information</b>
                  </u>
                  : Femmevista gets information about your IP address, proxy
                  server, operating system, web browser and add-ons, device
                  identifier and features, and/or ISP or your mobile carrier.
                  Femmevista may also access the address book and accounts
                  (including Google accounts, WhatsApp accounts, Facebook
                  accounts etc.) on your mobile device for the purposes of
                  allowing you to connect with other users using the Platform
                  and to import the contacts onto the Platform. Additionally,
                  Femmevista may access the device’s internal and external
                  storage to seamlessly store in such storage, any pictures you
                  create, receive or download during the course of using the
                  Platform.
                </li>
                <li>
                  <u>
                    <b>Internet</b>
                  </u>
                  : If you use the Platform from a mobile device, Femmevista
                  will access the internet or wifi network or any changes in the
                  internet or wifi network of your mobile device for running the
                  Platform and connecting you with the other users of the
                  Platform.
                </li>
                <li>
                  <u>
                    <b>Log Information</b>
                  </u>
                  : When you interact with the Platform, Femmevista collects
                  server logs, which may include information like device IP
                  address, access dates and times, and other system activity,
                  type of browser, and the third-party site or service you were
                  using before interacting with the Platform to understand your
                  usage of the Platform.
                </li>
                <li>
                  <u>
                    <b>Contacts Information</b>
                  </u>
                  : In order to allow you to network with other users of the
                  Platform, or to allow you to invite persons to use the
                  Platform, Femmevista may access names and contact information
                  from either your mobile device’s address book (if you are
                  accessing the Platform from a mobile device) or from your
                  email address book (both, if you are accessing the Platform
                  from a mobile device or from a web browser).
                </li>
              </ul>
            </p>
            <p>
              <u>
                <b>
                  [Note: Currently the Platform does not use third party
                  applications and services which may collect, use, store or
                  transmit information of the nature set out in the categories
                  above. Details of such third party applications/services will
                  be shared with their respective privacy policies in the future
                  when Femmevista decides to use them.]
                </b>
              </u>
            </p>

            <h4>USE OF YOUR INFORMATION</h4>
            <p>
              Femmevista uses the data (including any Personal Information) that
              is collected from you for the following purposes:
              <ul>
                <li>
                  To enable access to our Services made available through the
                  Platform;
                </li>
                <li>
                  To respond to the request that you sent us such as your
                  request for information, or your request to subscribe to a
                  Service;
                </li>
                <li>To administer, protect and improve the Platform;</li>
                <li>
                  To better understand the preferences of users of the Platform;
                </li>
                <li>To identify server problems;</li>
                <li>
                  To compile aggregated statistics about usage of the Platform;
                </li>
                <li>To help personalize your experience on the Platform;</li>
                <li>To improve Services offered to you ;</li>
                <li>
                  To help Femmevista in its internal business functioning;
                </li>
                <li>
                  To provide you with information about technologies, product or
                  service releases, news, and other communications;
                </li>
                <li>
                  To the extent permitted by applicable law, Femmevista may
                  combine various types of data that is collected; and
                </li>
                <li>
                  Any other use Femmevista may describe at the point when it
                  collects data.
                </li>
              </ul>
            </p>

            <h4>STORAGE &amp; RETENTION OF YOUR INFORMATION</h4>
            <p>
              Platform data is stored in aws(Amazon Web Services) dynamodb
              database.  We use dynamodb default encryption for data at rest to
              store data in encrypted format in database, to leverage their data
              center and network architecture which is built to meet the
              requirements of the most security-sensitive organizations. We
              retain your data as long as we deem it necessary to protect us
              from any legal liability.
            </p>

            <h4>SECURITY FOR YOUR INFORMATION</h4>
            <p>
              Femmevista follows generally accepted standards to store and
              protect the personal data we collect, both during transmission and
              once received and stored, including utilization of encryption
              where appropriate.
            </p>

            <h4>DATA SECURITY BREACH</h4>
            <p>
              Transmissions over the Internet are never 100% secure or
              error-free. However, Femmevista takes reasonable steps to protect
              your personal information from loss, misuse, and unauthorized
              access, disclosure, alteration, and destruction. Femmevista has
              implemented strict security controls, intrusion detection software
              and processes to alert us in the case of a potential or actual
              intrusion of our information systems.
            </p>

            <h4>ACCESS</h4>
            <p>
              If personal information you have submitted through the Platform is
              no longer accurate, current, or complete, you are allowed to
              update these changes using the Platform, but Femmevista reserves
              the right to use information obtained previously to verify your
              identity or take other actions that it believes is appropriate.
            </p>

            <h4>COOKIES POLICY</h4>
            <p>
              Cookies are small pieces of identifying information, stored by
              your browser on your PC, to enable information about your session
              on the website/mobile application to be maintained. The cookie may
              contain actual information (e.g. the date of your last visit), or
              just a unique reference ID that allows the website to look up
              information about your use.
              <br /> If the Platform sets cookies routinely, these can also be
              used to track your successive page views, and therefore your
              behavior on the Platform, whether or not you are logged in. Unless
              you log in or complete an enquiry form, such use of cookies will
              not enable the Platform to identify you (because cookies can only
              give access to information that the Platform already has). The
              Platform will not attempt to identify you unless you log in.
              <br /> Cookies set by one site cannot be read by another. However,
              one web page may be made up of components (such as news stories,
              images or advertising), some of which are delivered from third
              parties. Each of those third-party sites will be able to set and
              read its own cookies on any page where its content appears.
              Femmevista allows other companies such as web/mobile analytics
              partners to set or access their cookies or web beacons or similar
              technologies on the Platform. For example, Femmevista may use
              third party mobile analytics partners to analyze big-data on its
              behalf. These third-party analytics partners employ cookies, web
              beacons and other similar technologies to measure and analyze the
              big-data. To do so, these partners may use information about your
              use of the Platform which information will be anonymized such that
              it cannot reasonably be used to identify you. This data can also
              be used for online marketing purposes by Femmevista. Currently the
              Platform does not use third party applications and services which
              may collect, use, store or transmit information of the nature set
              out in the categories above. Details of such third party
              applications/services will be shared with their respective privacy
              policies in the future when Femmevista decides to use them.
            </p>

            <p>
              <u>Cookies Usage</u>
            </p>
            <p>
              Femmevista uses cookies, device finger printing, open device
              identifier number or similar technologies to collect the
              information described above. Femmevista may also use the above
              mentioned technologies to: (i) provide you with customized content
              on the Platform; (ii) monitor the Platform usage; and (iii)
              conduct research to improve the content and services provided on
              the Platform.
              <br />
              If you block cookies from the Platform, you will not be able to
              log in, and a range of other functions, such as the tracking of
              new messages in the discussion forums, will fail. However, you
              will be able to browse most of the information on the Platform.
              The Platform uses some third-party services, and you may need to
              consult their policies separately.
            </p>

            <p>
              <u>
                Using your browser to block cookies, and further information
              </u>
              <p>
                Most browsers allow you to control cookies through their
                settings preferences. However, if you limit the ability of
                websites to set cookies, your overall user experience may get
                affected such as not having customized access to the Platform.
                It may also stop you from saving customized settings like login
                information. If you have questions about our use of cookies,
                please contact{" "}
                <a href="mailto: support@thestarinme.com">
                  support@thestarinme.com
                </a>
                .
              </p>
            </p>

            <h4>CHILDREN’S PRIVACY</h4>
            <p>
              The Platform is intended for adults. Femmevista does not
              intentionally or knowingly collect personally-identifiable
              information from minors (under the age of 18) and requests that
              minors (under the age of 18) do not submit any personal
              information on the Platform.
            </p>
            <h4>AMENDMENTS</h4>
            <p>
              Femmevista reserves the right to change, modify, add or remove
              portions of this Privacy Policy at any time, but will alert you
              that changes have been made by indicating on the Privacy Policy
              the date it was last updated. When you use the Platform, you are
              accepting the current version of this Privacy Policy as posted on
              the Platform at that time. It is recommended that users revisit
              this Privacy Policy on occasion to learn of any changes.
            </p>
            <h4>GRIEVANCE OFFICER</h4>
            <p>
              If you have any questions, or concerns about this Privacy Policy
              or any complaints or grievances about the manner in which
              Femmevista handles your personal information or the use of your
              personal information (in doing so acknowledging that Femmevista
              may be unable to provide you all or some of the services), please
              feel free to contact the Grievance Officer any time at:
              <br />
              Name: <b>Mahua Mukherjee</b>
              <br />
              Contact Details:{" "}
              <a href="mailto:report@thestarinme.com">report@thestarinme.com</a>
              <br />
              <b>
                [Note: You acknowledge and agree that merely un-installing the
                Platform from your mobile device will not result in the deletion
                of your information from the Platform and you will have to send
                an email to{" "}
                <a href="mailto:support@thestarinme.com">
                  support@thestarinme.com
                </a>{" "}
                if you wish to have all your information deleted from the
                Platform databases and servers.]
              </b>
            </p>
            <p>
              THE USE OF THE PLATFORM OR ANY PART OF THE SERVICES ON THE
              PLATFORM, EITHER IN WHOLE OR IN PART, SIGNIFIES YOUR AGREEMENT TO
              THIS PRIVACY POLICY.
            </p>
          </div>{" "}
          <div className={styles.footer}>
            <FooterContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
