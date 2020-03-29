import React, { Component } from "react";
import styles from "./Terms.css";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
import { ABOUT_US, EVENT, BLOG, PRIVACY, TERMS } from "../../utils/constant.js";

export default class Eula extends Component {
  handleredirect = url => {
    if (this.props.history) {
      window.open(url, "_blank");
    }
  };
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
            <h2>END USER LICENSE AGREEMENT</h2>
            {/* <h3>Last revised on 13 May 2019</h3> */}
            <p>
              This End User License Agreement (the "<b>EULA</b>") is a binding
              legal agreement between you, as an individual or entity, and
              Femmevista Technologies Private Limited, a company incorporated
              under the Companies Act, 2013 having its registered office at
              8th Floor, SLN Terminus, Survey No 133, Beside Botanical
              Gardens, Gachibowli, Hyderabad, India- 500032, who is the owner of
              the mobile application called Femmevista (the “
              <b>Application Provider</b>”). By downloading, installing, or
              using this application (the “<b>Licensed Application</b>”) for
              Android, iOS or other mobile platform, as applicable, you agree to
              be bound by the terms of this EULA. If you do not agree to the
              EULA, do not check the “I accept the terms” box and do not use the
              Licensed Application.
              <br /> <br />
              This EULA, along with the Privacy Policy and the Femmevista Terms
              of Use constitute the entire agreement between you and the
              Application Provider.
            </p>

            <h3>DESCRIPTION OF LICENSED APPLICATION</h3>
            <p>
              The Licensed Application is a downloadable software application
              that enables you to access the functionality directly from your
              Android, iPhone, iPad or other mobile device supported by the
              Application Provider (“<b>Device</b>"). You may download the
              Licensed Application whether or not you use the Licensed
              Application’s services, but you must associate it with your
              Licensed Application account to enable its full functionality.
            </p>

            <h3>IP OWNERSHIP</h3>
            <p>
              Title, ownership and all rights (including without limitation
              intellectual property rights) in and to the Licensed Application
              shall remain with the Application Provider. Except for those
              rights expressly granted in this EULA, no other rights are
              granted, whether express or implied.
            </p>

            <h3>SCOPE OF LICENSE</h3>
            <p>
              This license granted to you for the Licensed Application by the
              Application Provider, is limited to a non-exclusive,
              non-transferable, license to use the Licensed Application on any
              Device that you own or control. The Licensed Application is
              provided to you under this EULA solely for your private,
              non-commercial use. Use of the Licensed Application requires
              Internet access on your Device. This license does not allow you to
              use the Licensed Application on any Device that you do not own or
              control. Nothing contained in the Licensed Application should be
              considered as granting you, by implication or otherwise, any
              license or right to use any trade-marks, logos, or other names
              contained in the Licensed Application. You may not rent, lease,
              lend, sell, redistribute or sublicense the Licensed Application.
              You may not copy, decompile, reverse engineer, disassemble,
              attempt to derive the source code of, modify, or create derivative
              works of the Licensed Application, any updates, or any part
              thereof (except as and only to the extent any foregoing
              restriction is prohibited by applicable law or to the extent as
              may be permitted by the licensing terms governing use of any open
              sourced components included within the Licensed Application). Any
              attempt to do so is a violation of the rights of the Application
              Provider and its licensors. If you breach this restriction, you
              may be subject to prosecution and damages. The terms of the
              license will govern any upgrades provided by the Application
              Provider that replace and/or supplement the original Licensed
              Application, unless such upgrade is accompanied by a separate
              license in which case the terms of that license will govern its
              use.
            </p>

            <h3>USER ACCESS AND CONSENT TO USE OF DATA</h3>
            <p>
              In order to register with the Licensed Application you will have
              to provide your email id, name, mobile number, confirmation of
              your gender and the name of the country and state in which you
              download, access and use the Licensed Application. You will ensure
              that the email id and mobile number provided for registration with
              the Licensed Application is your own and does not belong to any
              third party and that it is a valid and existing email id and
              mobile number. You will ensure that you will not use the name,
              email id or mobile number of another person with the intent to
              impersonate that person. The collection, storage, use and sharing
              (if any) of this data by the Application Provider will be in
              accordance with the Privacy Policy of the Licensed Application, a
              link of which is provided{" "}
              <span
                style={{
                  color: "#d81818",
                  fontFamily: "bold",
                  cursor: "pointer"
                }}
                onClick={() => this.handleredirect(PRIVACY)}
              >
                <u>here</u>
              </span>
              .
            </p>
            <h3>NO WARRANTY</h3>
            <p>
              YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED
              APPLICATION IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO
              SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH
              YOU. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE
              LICENSED APPLICATION AND SERVICES, PERFORMED OR PROVIDED BY THE
              LICENSED APPLICATION (&quot;SERVICES&quot;) ARE PROVIDED &quot;AS
              IS&quot; AND “AS AVAILABLE”, WITH ALL FAULTS AND WITHOUT WARRANTY
              OF ANY KIND, AND THE APPLICATION PROVIDER HEREBY DISCLAIMS ALL
              WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED APPLICATION
              AND ANY SERVICES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING,
              BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF
              MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A
              PARTICULAR PURPOSE, OF ACCURACY, AND NON- INFRINGEMENT OF THIRD
              PARTY RIGHTS. APPLICATION PROVIDER DOES NOT WARRANT AGAINST
              INTERFERENCE WITH YOUR ENJOYMENT OF THE LICENSED APPLICATION, THAT
              THE FUNCTIONS CONTAINED IN, OR SERVICES PERFORMED OR PROVIDED BY,
              THE LICENSED APPLICATION WILL MEET YOUR REQUIREMENTS, THAT THE
              OPERATION OF THE LICENSED APPLICATION OR SERVICES WILL BE
              UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE LICENSED
              APPLICATION OR SERVICES WILL BE CORRECTED. NO ORAL OR WRITTEN
              INFORMATION OR ADVICE GIVEN BY APPLICATION PROVIDER OR ITS
              AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SOME
              JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR
              LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, IN SUCH
              CASES THE ABOVE EXCLUSION AND LIMITATIONS WILL APPLY TO YOU TO THE
              EXTENT PERMISSIBLE BY LAW.
            </p>
            <h3>LIMITATION OF LIABILITY</h3>
            <p>
              IN NO EVENT SHALL THE APPLICATION PROVIDER OR ANY OF ITS
              SUBSIDIARIES OR AFFILIATES BE LIABLE TO YOU OR ANY PERSON FOR ANY
              DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL OR OTHER DAMAGES
              (INCLUDING, WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS
              INTERRUPTION, LOSS OF INFORMATION OR PROGRAMS OR OTHER DATA ON
              YOUR INFORMATION HANDLING SYSTEM) THAT ARE RELATED TO THE USE OF,
              OR THE INABILITY TO USE, THE SERVICES AND FUNCTIONS OF THE
              LICENSED APPLICATION OR ANY LINKED WEB SITE/ MOBILE APPLICATION,
              EVEN IF THE APPLICATION PROVIDER IS EXPRESSLY ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <h3>INDEMNITY</h3>
            <p>
              You agree to indemnify and hold harmless the Application Provider,
              its subsidiaries and affiliates from any claim, cost, expense,
              judgement or other loss relating to your use of the Licensed
              Application, including without limitation of the foregoing, any
              action you take which is in violation of this EULA.
            </p>
            <h3>TERMINATION</h3>
            <p>
              The Application Provider may modify the Licensed Application and
              this EULA with notice to you either in email or by publishing
              notice on the Application Provider’s website, including but not
              limited to charging fees for the Licensed Application, or changing
              the functionality or appearance of the Licensed Application. In
              the event the Application Provider modifies the Licensed
              Application or the EULA, you may terminate this EULA and cease use
              of the Licensed Application. The Application Provider may
              terminate your use of the Licensed Application or the EULA at any
              time, with or without notice.
            </p>
            <h3>CHOICE OF LAW</h3>
            <p>
              This EULA shall be governed by the laws of Republic of India
              without giving effect to its conflict of laws provisions. This
              EULA shall be subject to the exclusive jurisdiction of the courts
              at Hyderabad, India.
            </p>
            <h4>
              I HAVE READ THE TERMS OF THIS EULA AND AGREE TO ALL OF THE
              PROVISIONS CONTAINED ABOVE.
            </h4>
            <h4>I hereby agree to the terms of this EULA.</h4>
          </div>{" "}
          <div className={styles.footer}>
            <FooterContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
