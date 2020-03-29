import React, { Component } from "react";
import styles from "./AboutUs.css";
import Footer from "../Footer/Footer";
import CenteredContent from "../../core/CenteredContent";
import image1 from "../../images/overview.png";
import image2 from "../../images/networking-tsim.png";
import image3 from "../../images/digital-portfolio.png";
import image4 from "../../images/entreprener-pic.png";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import FooterContainer from "../Footer/FooterContainer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";

export default class TermsOfService extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      window.scroll({
        top: -200
      });
    }, 10);
  };
  render() {
    return (
      <React.Fragment>
        {/* <div className={styles.banner}>
          <div className={styles.title}>The star in me</div>
          <div className={styles.opactityWrapper}></div>
        </div> */}
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer />
        </div>
        <div className={styles.base} style={{ marginTop: "30px" }}>
          <CenteredContent contentWidth="1200px">
            <div className={styles.container}>
              <p className={styles.titleText}>
                {" "}
                Unleash the power of branding, connections, networking and
                guidance through{" "}
                <div className={styles.starText}>The Star In Me</div>
              </p>
              <hr />
              <div className={styles.overview}>
                <div className={styles.leftSection}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${image1})`,
                      backgroundSize: "cover"
                    }}
                  ></div>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.overviewText}>
                    <DesktopOnly>
                      <div className={styles.rightheader}>
                        The <strong>Overview</strong>
                      </div>
                    </DesktopOnly>
                    <MobileOnly>
                      <div className={styles.leftheader}>
                        The <strong>Overview</strong>
                      </div>
                    </MobileOnly>
                    <div className={styles.summary}>
                      <b>The star in me</b> is a career advancement platform for
                      women leaders of today and tomorrow and a diversity
                      partner for organizations. It is an ecosystem of
                      professional connects, personal branding tools, curated
                      global coaches and learning resources. The platform
                      enables cultivation of a robust professional network,
                      engaging seminars and discussions, while providing its
                      users with the ability to grow as individuals.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.overviewSecond}>
                <div className={styles.leftheader}>The Need Gap</div>
                <div className={styles.summary}>
                  Women still continue to be under-represented in the workforce
                  and lack access to professional networks, mentorships,
                  guidance and even jobs. Preconceived notions on how women
                  influence a workplace or heirarchy have created barriers for
                  progress without factoring in their qualifications. While
                  there are a plethora of platforms that attempt to tackle these
                  obstacles, they fail to provide a collaborative professional
                  ecosystem that enables women to pursue their professional
                  aspirations.
                </div>
              </div>
              <div className={styles.overview}>
                <div className={styles.leftSection}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${image2})`,
                      backgroundSize: "cover"
                    }}
                  ></div>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.overviewText}>
                    <DesktopOnly>
                      <div className={styles.rightheader}>
                        Her <strong>Digital Portfolio</strong>
                      </div>
                    </DesktopOnly>
                    <MobileOnly>
                      <div className={styles.leftheader}>
                        Her <strong>Digital Portfolio</strong>
                      </div>
                    </MobileOnly>

                    <div className={styles.summary}>
                      Resumes and CVs are notorious for lacking interactivity
                      and encouraging readers to skim through them as fast as
                      possible. What if you could build a profile to communicate
                      your strengths and experiences efficiently and leverage
                      pictures and videos to tell your story?{" "}
                      <b>The star in me</b> does exactly that, reducing clutter
                      on their portfolio by guiding its members to detail their
                      profile with information that makes them unique. This
                      digital identity is visual, easily shareable and quick to
                      setup.
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.overview}>
                <div className={styles.leftSection}>
                  <div className={styles.overviewText}>
                    <div className={styles.leftheader}>
                      <strong>Networking</strong> made easier
                    </div>
                    <div className={styles.summary}>
                      <b>The star in me</b> is built to overcome stigmas by
                      fostering a community that helps its members. The platform
                      breaks the traditional hierarchy by providing the right
                      tools to seek guidance, improve skills through coaching
                      and sharing experiences with other members.
                      <br />
                      <br />
                      Content delivery is curated for each individual, making it
                      easier for its members to stay connected with other
                      like-minded individuals and groups. Members are encouraged
                      to interact with others through a variety of mediums.
                      Members can direct questions to subject matter experts,
                      receive recommendations on topics to follow and groups to
                      join.
                    </div>
                  </div>
                </div>
                <div className={styles.rightSection}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${image3})`,
                      backgroundSize: "cover"
                    }}
                  ></div>
                </div>
              </div>
              <hr />
              {/* <div className={styles.overview}>
                <div className={styles.networth}>
                  <div
                    className={styles.logo}
                    style={{
                      backgroundImage: `url(${logo1})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <div className={styles.logoHeader}>Network = Net worth</div>
                  <div className={styles.logoSummary}>
                    Connect with leaders of tomorrow and engage with powerful
                    content curated around your interests.
                  </div>
                </div>
                <div className={styles.strategy}>
                  {" "}
                  <div
                    className={styles.logo}
                    style={{
                      backgroundImage: `url(${logo2})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <div className={styles.logoHeader}>Product Strategy</div>
                  <div className={styles.logoSummary}>
                    The star in me provides its members with curated learning
                    resources, tools for personal branding, avenues for
                    professional networking, access to curated coaches and
                    guides and select career opportunities.
                  </div>
                </div>
                <div className={styles.design}>
                  {" "}
                  <div
                    className={styles.logo}
                    style={{
                      backgroundImage: `url(${logo3})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <div className={styles.logoHeader}>Intuitive Design</div>
                  <div className={styles.logoSummary}>
                    Ease of usability through fluid design that produces
                    opportunities for helping product growth exponentially
                  </div>
                </div>
              </div>
              <hr /> */}
              <div className={styles.overview}>
                <div className={styles.leftSection}>
                  <DesktopOnly>
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(${image4})`,
                        backgroundSize: "contain",
                        width: "100%",
                        height: "442px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </DesktopOnly>
                  <MobileOnly>
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(${image4})`,
                        backgroundSize: "contain",
                        width: "100%",
                        height: "250px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                      }}
                    ></div>
                  </MobileOnly>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.overviewText}>
                    <DesktopOnly>
                      <div className={styles.rightheader}>
                        The <strong>Entrepreneurs</strong>
                      </div>
                    </DesktopOnly>
                    <MobileOnly>
                      <div className={styles.leftheader}>
                        The <strong>Entrepreneurs</strong>
                      </div>
                    </MobileOnly>

                    <div className={styles.summary}>
                      <b>Mahua Mukherjee</b> has conceptualized and led multiple
                      global change initiatives spanning 19 years in IT service
                      delivery, Process reengineering and Operations Consulting
                      Practice leader with P&L accountability. She has partnered
                      with clients across BFS, Insurance and Pharma industries
                      in the US, UK, APAC and India. Her last role was Director,
                      Consulting in Cognizant U.S. based out of Boston. She is
                      in aegis of NASSCOM, was a member of India delegation team
                      for ISO 20000 standard. Mahua is an Alumna of MIT Sloan
                      (AMP), Indian School of Business and IIT Kharagpur.
                    </div>
                    <br />
                    <br />
                    <div className={styles.summary}>
                      <b>Uma Kasoji</b> has incubated consulting practices and
                      led business transformation initiatives in collaboration
                      with C-suite stakeholders across the US, Europe and APAC.
                      She has extensive experience in operations, business
                      strategy, business development and delivery over a career
                      spanning 18 years with Cognizant, UBS, Infosys and GE
                      Capital. Uma is also a Member of the Board of Governors at
                      Indian Institute of Management, Kozhikode and an Alumna of
                      Indian Institute of Management, Kozhikode.
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </CenteredContent>
          <div className={styles.footer}>
            <FooterContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
