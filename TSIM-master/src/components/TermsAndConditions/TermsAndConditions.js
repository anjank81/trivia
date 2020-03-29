import React, { Component } from "react";
import styles from "./Terms.css";
// import { HOME_PAGE_URL } from "../lib/constants";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FooterContainer from "../Footer/FooterContainer";

export default class TermsOfService extends Component {
  // backToHomePage() {
  //   if (this.props.history) this.props.history.push(HOME_PAGE_URL);
  // }

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
            <h2>Terms of Service</h2>
            <p>
              <b>
                “The star in me” is a professional platform for women entrepreneurs
                created by Femmevista Technologies Private Limited, accessible
                through its website{" "}
                <a href="https://thestarinme.com">https://thestarinme.com</a> or
                by downloading it as a mobile application (collectively
                hereinafter referred to as “Platform”). The Platform is a
                professional network and online platform specifically designed
                only for women. Women, through the Platform can find business
                and professional opportunities, create networks for business
                with like-minded professionals and seek career and skill
                guidance (“Services”).
                <br />
                Please read these Terms of Use carefully before accessing or
                using the Platform. By accessing or downloading or registering
                on the Platform, you agree to be bound by these Terms of Use.
                Your use of the Platform is also subject to the Privacy Policy,
                which can be accessed here, and which deals with how we collect
                your personal information and how it is used, shared and stored.
                The Terms of Use together with the Privacy Policy form a binding
                contract.
                <br />
                You agree that by clicking “Join Now”, “Join”, “Sign Up” or
                similarly, registering, accessing or using the Platform, you are
                agreeing to enter into a legally binding contract with
                Femmevista (even if you are using the Platform on behalf of a
                company). If you do not agree to this contract (“Terms of Use”),
                do not click “Join Now” (or similar) and do not access or
                otherwise use the Platform. If you wish to terminate this
                contract, at any time you can do so by closing your account and
                no longer accessing or using the Platform.
              </b>{" "}
            </p>
            <p>
              The terms &#39;You&#39; or &#39;Your&#39; in these Terms of Use
              refer to You as a registered user (“<b>Registered User</b>” as
              defined below) and the terms “thestarinme”, “Femmevista”
              &#39;We&#39;, &#39;Us&#39;, &#39;Company&#39;, and &#39;Our&#39;
              refer to Femmevista Technologies Private Limited. These Terms of
              Use and the Privacy Policy, together with any other policies such
              as the EULA which may be applicable to specific portions of the
              Platform and any disclaimers which may be present on the Website
              are referred to as &quot;<b>Agreement</b>&quot;. Femmevista
              Technologies Private Limited, a company incorporated under the
              Companies Act, 2013 having its registered office at 3-6-147/3,
              Himayat Nagar, Hyderabad- 500029, Telangana (“<b>Femmevista</b>
              "), who has developed and is the owner of the Platform, reserves
              all rights not expressly granted to you under these Terms of Use.
            </p>
            <ol>
              <li style={{ fontWeight: "bold" }}>MEMBERS AND VISITORS</li>
              <p>
                When you become a registered user of the Platform, you become a
                “<b>Member</b>”. If you have chosen not to register for the
                Platform, you may access only certain information related
                features as a “<b>Visitor</b>”.
              </p>
              <li style={{ fontWeight: "bold" }}>REGISTRATION AS A USER</li>
              <p>
                By downloading and/or registering with the Platform, you
                represent that you have attained 18 years of age and are not a
                minor. You are not barred by any law, in any jurisdiction or
                bound by any agreement that restricts your rights to access,
                download and register with the Platform.
                <br />
                In order to register with the Platform you will have to provide
                your name, email id, mobile number on which you download the
                Platform, and confirmation of your gender. You will ensure that
                the email id and mobile number provided for registration with
                the Platform is your own and does not belong to any third party
                and that it is a valid and existing email id and mobile number.
                You will ensure that you will not use the name, email id or
                mobile number of another person with the intent to impersonate
                that person.
                <br />
                You agree to (a) provide true, accurate, current and complete
                information about yourself as required during registration and
                in your profile and (b) maintain and promptly update the
                information to keep it true, accurate, current and complete. If
                you provide any information that is untrue, inaccurate, not
                current or incomplete, or if Femmevista has reasonable grounds
                to suspect that such information is untrue, inaccurate, not
                current or incomplete, Femmevista has the right to suspend or
                terminate your account and/or refuse any or all current or
                future use of the Platform.
                <br />
                You acknowledge, consent and agree that Femmevista may access,
                preserve or disclose your account information, including but not
                limited to registration and profile information, personal
                information such as your name, address, mobile number, date of
                birth, etc if required to do so by law or in good faith,
                believing that such access, preservation or disclosure is
                reasonably necessary to (a) comply with legal process or the
                order of any Government authority; (b) enforce the Terms of Use;
                (c) respond to claims that the registration and profile
                information violates the rights of third parties; or (d) protect
                the rights, property or personal safety Femmevista, Platform
                users and the public.
                <br />
                The collection, storage, use and sharing (if any) of this data
                by Femmevista will be in accordance with the Privacy Policy of
                the Platform which can be found here <b>PRIVACY POLICY</b> which
                is available at Need
              </p>
              <li style={{ fontWeight: "bold" }}>CONTENT</li>
              <p>
                The various types of content available on the Platform may be
                categorised as follows:
              </p>
              <ol type="i">
                <li>
                  Content provided by Registered Users’ interactions with other
                  Registered Users (&quot;<b>User Content</b>&quot;) or by the
                  authorised staff of Femmevista.
                </li>
                <li>
                  Content which Femmevista (through itself or its contractors)
                  has generated through the Platform or procured for the Website
                  (&quot;<b>Femmevista Content</b>&quot;).
                  <br />
                  Femmevista reserves the right to delete, move or edit any
                  Femmevista Content (including material posted in any
                  interactive area of the Platform) that it may determine, in
                  its sole discretion, violates this Agreement or is otherwise
                  unacceptable. Femmevista also reserves the right to block a
                  Registered User or delete any User Content that it considers
                  illegal or offensive. Although Femmevista reserves the right
                  to remove any offending content on the Platform, You
                  understand and agree that You nonetheless may be exposed to
                  such material inadvertently and therefore waive all rights to
                  damages (from any party) related to such exposure. You will
                  not hold Femmevista responsible for such inadvertent exposure.
                  <br />
                  As between you and Femmevista, you own the content and
                  information that you submit or post to the Platform, and you
                  are only granting Femmevista and affiliates a worldwide,
                  transferable and sub-licensable right to use, copy, modify,
                  distribute, publish, and process, information and content that
                  you provide through the Platform, without any further consent,
                  notice and/or compensation to you or others.
                </li>
              </ol>

              <p>These rights are limited in the following ways:</p>
              <ul>
                <li>
                  You can end this license for specific content by deleting such
                  content from the Platform, or generally by closing your
                  account, except (a) to the extent you shared it with others as
                  part of the Platform and they copied, re-shared it or stored
                  it and (b) for the reasonable time it takes to remove from
                  backup and other systems.
                </li>
                <li>
                  Femmevista will procure your consent if they want to give
                  others the right to publish your content beyond the Platform.
                  However, if you choose to share your content as “public”, a
                  feature that allows other Members to embed that public content
                  onto third-party services will be enabled, and search engines
                  are further enabled to make that public content findable
                  through their services.
                </li>
                <li>
                  While Femmevista may edit and make format changes to your
                  content (such as translating it, modifying the size, layout or
                  file type or removing metadata), there will not be any
                  modifications to the meaning of your expression.
                </li>
                <li>
                  Because you own your content and information and Femmevista
                  only has non-exclusive rights to it, you may choose to make it
                  available to others, including under the terms of a Creative
                  Commons license.
                </li>
              </ul>
              <p>
                You will solely be responsible for all usage or activity in your
                account after registration with the Platform, including use of
                the account by any third party authorized by you. You agree that
                you will not use the Platform to post pornographic content or
                content that may be deemed offensive, indecent, or
                objectionable, which content may or may not be identified as
                having explicit language or market, or sell business, products
                or services that is illegal. Any fraudulent, abusive, misuse or
                otherwise illegal activity may be grounds for removal of such
                content and/or termination of your account at Femmevista’s sole
                discretion. You will immediately notify Femmevista at{" "}
                <a href="mailto:support@thestarinme.com">
                  support@thestarinme.com
                </a>{" "}
                of any known or suspected unauthorized use(s) of your account,
                or any known or suspected breach of security. Femmevista will
                not be liable for any losses caused to you, whether directly or
                indirectly for any unauthorised use of your account or for your
                failure or delay to intimate Femmevista of known or suspected
                unauthorized use(s) of your account, or any known or suspected
                breach of security.
              </p>
              <li style={{ fontWeight: "bold" }}>INTERMEDIARY</li>
              <p>
                You understand that Femmevista is that of an
                &#39;intermediary&#39; as defined under the Information
                Technology Act, 2000 and the rules thereunder. Being an
                intermediary, Femmevista has no responsibility and / or
                liability in respect of the content and transactions on the
                Platform including any User Content.
                <br />
                If Femmevista suspects any illegal, wrongful or fraudulent
                activity on the Platform by any Registered User, notwithstanding
                any other rights Femmevista may have, we shall have the right to
                suspend the Registered User’s account. Femmevista also reserves
                the right to inform the relevant government or law enforcement
                authorities of such a transaction.
              </p>
              <li style={{ fontWeight: "bold" }}>
                End User License Agreement (EULA)
              </li>
              <p>
                The use of the Platform granted by Femmevista, is subject to the
                terms of the End User License Agreement. You can access the EULA
                by clicking here. All the terms of the EULA are incorporated
                herein, into these Terms of Use and are binding on you in
                connection to the usage of the Platform.
                <br />
                The license to the Platform is effective until terminated by you
                or by Femmevista in the following circumstances:
                <br />
                <ol type="i">
                  <li>
                    When you delete your account of your own accord or send an
                    email to{" "}
                    <a href="mailto:support@thestarinme.com">
                      support@thestarinme.com
                    </a>{" "}
                    requiring deletion of your account;
                  </li>
                  <li>
                    When Femmevista ceases to make available the Platform with
                    the provision of 30 days’ notice.
                  </li>
                </ol>
                <p>
                  <b>
                    <u>
                      [Note: Merely un-installing the Platform from your mobile
                      device will not result in the deletion of your account or
                      your information from the Platform and you will have to
                      send an email to{" "}
                      <a href="mailto:support@thestarinme.com">
                        support@thestarinme.com
                      </a>{" "}
                      if you wish to delete all your account or your information
                      from the Platform databases and servers.]
                    </u>
                  </b>
                </p>
              </p>
              <li style={{ fontWeight: "bold" }}>
                SERVICES &amp; THIRD PARTY MATERIAL
              </li>
              <p>
                You understand and acknowledge that Femmevista is merely
                providing a platform for Platform content, information, job
                search, recruiting, marketing, sales or any other services and
                further specifically enables networking with female
                entrepreneurs and professionals and does not provide any
                guarantees in relation to your success in relation to any of the
                aforementioned.
                <br />
                <br />
                You understand that by using the Platform, you may encounter
                content that may be deemed offensive, indecent, or
                objectionable, which content may or may not be identified as
                having explicit language. Nevertheless, you agree to use the
                Platform at your sole risk and that Femmevista shall not have
                any liability to you for content that may be found to be
                offensive, indecent, or objectionable.
                <br />
                <br />
                The Platform includes content, data, information, applications
                or materials gathered, from third parties, content providers or
                other users of the Platform (collectively and individually
                called “<b>Third Party Materials</b>”). By using the Platform,
                you acknowledge and agree that Femmevista is not responsible for
                examining or evaluating the content, accuracy, completeness,
                timeliness, validity, copyright compliance, legality, decency,
                quality or any other aspect of such Third Party Materials.
                Femmevista does not warrant or endorse and does not assume and
                will not have any liability or responsibility to you or any
                other person for any third-Third Party Materials or for any
                other materials, products, or services of third parties.
                <br />
                <br />
                You agree that the Platform contains proprietary content,
                information and material that is protected by applicable
                intellectual property and other laws, including but not limited
                to copyright, and that you will not use such proprietary
                content, information or materials in any way whatsoever except
                for permitted use of the Platform. You agree not to modify,
                rent, lease, loan, sell, distribute, or create derivative works
                of the Platform, in any manner, and you shall not exploit the
                Platform in any unauthorized way whatsoever, including but not
                limited to, by trespass or burdening network capacity. You
                further agree not to use the Platform in any manner to harass,
                abuse, stalk, bully, threaten, defame, impersonate, gamble,
                exhibit or transmit sexually explicit, pornographic, pedophilic
                content, promulgate hate speech, carry out illegal activities or
                otherwise infringe or violate the rights of any person
                (including other users of the Platform and third parties,
                related or unrelated to the use of the Platform or the services
                provided through it) including any patent, copyright, trademark,
                trade secret or other proprietary rights of such persons. You
                also agree that Femmevista is not in any way responsible for any
                such use by you, nor for any harassing, threatening, defamatory,
                offensive or illegal messages or transmissions that you may
                receive as a result of using the Platform.
                <br />
                <br />
                Femmevista makes no representations that the platform provided
                through the Platform and Third Party Materials are appropriate
                or available for use in any particular location. To the extent
                you choose to access the Platform or Third Party Materials, you
                do so at your own initiative and are responsible for compliance
                with any applicable laws, including but not limited to
                applicable local laws. Femmevista, and its licensors, reserve
                the right to change, suspend, remove, or disable access to the
                Platform at any time without notice. In no event will Femmevista
                be liable for the removal of or disabling of access to any
                services provided through the Platform. Femmevista may also
                impose limits on the use of or access to the Platform, in any
                case and without notice or liability.
              </p>
              <li style={{ fontWeight: "bold" }}>ADVERTISEMENTS</li>
              <p>
                Femmevista or any third party advertisers may display
                advertisements and promotions on the Platform. The manner, mode
                and extent of advertising by Femmevista on the Platform are
                subject to change. By clicking on any advertisements you may
                leave the Platform and be directed to an external
                application/website, or to an application/website maintained by
                an entity other than Femmevista. If you decide to visit any such
                application/website, you do so at your own risk and it is your
                responsibility to take all protective measures to guard against
                viruses or other destructive elements. Femmevista makes no
                warranty or representation regarding, and does not endorse, any
                linked applications/websites or the information appearing
                thereon or any of the products or services described thereon.
                <br />
                Femmevista makes no warranty or representation regarding the
                merchantability, fitness for particular purpose, availability,
                efficacy, reliability, durability of any product or service
                advertised on the Platform.
              </p>
              <li style={{ fontWeight: "bold" }}>NO WARRANTY</li>
              <p>
                YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE PLATFORM IS
                AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY
                QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU. TO THE
                MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE PLATFORM AND
                SERVICES, PERFORMED OR PROVIDED BY THE PLATFORM ARE PROVIDED
                &quot;AS IS&quot; AND “AS AVAILABLE”, WITH ALL FAULTS AND
                WITHOUT WARRANTY OF ANY KIND, AND FEMMEVISTA HEREBY DISCLAIMS
                ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE PLATFORM AND
                ANY SERVICES, EITHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING,
                BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF
                MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A
                PARTICULAR PURPOSE, OF ACCURACY, AND NON-INFRINGEMENT OF THIRD
                PARTY RIGHTS. FEMMEVISTA DOES NOT WARRANT AGAINST INTERFERENCE
                WITH YOUR ENJOYMENT OF THE PLATFORM; THAT THE FUNCTIONS
                CONTAINED IN, OR SERVICES PERFORMED OR PROVIDED BY, THE PLATFORM
                WILL MEET YOUR REQUIREMENTS, THAT THE OPERATION OF THE PLATFORM
                OR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS
                IN THE PLATFORM OR SERVICES WILL BE CORRECTED. NO ORAL OR
                WRITTEN INFORMATION OR ADVICE GIVEN BY FEMMEVISTA OR ITS
                AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SOME
                JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES
                OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A CONSUMER, IN
                SUCH CASES THE ABOVE EXCLUSION AND LIMITATIONS WILL APPLY TO YOU
                TO THE EXTENT PERMISSIBLE BY LAW.
              </p>
              <li style={{ fontWeight: "bold" }}>LIMITATION OF LIABILITY</li>
              <p>
                IN NO EVENT SHALL FEMMEVISTA OR ANY OF ITS SUBSIDIARIES OR
                AFFILIATES BE LIABLE TO YOU OR ANY PERSON FOR ANY DIRECT,
                INDIRECT, SPECIAL, CONSEQUENTIAL OR OTHER DAMAGES (INCLUDING,
                WITHOUT LIMITATION, ANY LOST PROFITS, BUSINESS INTERRUPTION,
                LOSS OF INFORMATION OR PROGRAMS OR OTHER DATA ON YOUR
                INFORMATION HANDLING SYSTEM) THAT ARE RELATED TO THE USE OF, OR
                THE INABILITY TO USE, THE SERVICES AND FUNCTIONS OF THE PLATFORM
                OR ANY LINKED WEB SITE/ MOBILE APPLICATION, EVEN IF FEMMEVISTA
                IS EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <li style={{ fontWeight: "bold" }}>INDEMNITY</li>
              <p>
                You agree to indemnify and hold harmless Femmevista, its
                subsidiaries and affiliates from any claim, cost, expense,
                judgement or other loss relating to your use of the Platform,
                including without limitation of the foregoing, any action you
                take which is in violation of these Terms of Use.
              </p>
              <li style={{ fontWeight: "bold" }}>CHOICE OF LAW</li>
              <p>
                These Terms of Use shall be governed by the laws of Republic of
                India without giving effect to its conflict of laws provisions.
                These Terms of Use shall be subject to the exclusive
                jurisdiction of the courts at Hyderabad, India.
              </p>
              <li style={{ fontWeight: "bold" }}>
                NO THIRD PARTY BENEFICIARIES
              </li>
              <p>
                This contract is solely for your benefit and the benefit of
                Femmevista.
              </p>
              <li style={{ fontWeight: "bold" }}>SEVERABILITY</li>
              <p>
                If for any reason a court of competent jurisdiction finds any
                provision or portion of these Terms of Use to be unenforceable,
                the remainder of these Terms of Use will continue in full force
                and effect.
                <br /> Please email us at{" "}
                <a href="mailto:legal@thestarinme.com">
                  legal@thestarinme.com
                </a>{" "}
                if you have any questions regarding these Terms of Use.
              </p>
              <li style={{ fontWeight: "bold" }}>ANDROID™ TERMS OF USE</li>
              <p>
                You will be governed by any additional terms of use that may be
                specified by the Android™ store or the platform from which you
                downloaded this Platform.
              </p>
              <li style={{ fontWeight: "bold" }}>
                CONTACT US-GRIEVANCE OFFICER
              </li>
              <p>
                If you have any concerns, complaints or grievances about other
                users or their manner of use of the Platform, including their
                use of the Platform in any manner to harass, abuse, stalk,
                bully, threaten, defame, impersonate, gamble, exhibit or
                transmit sexually explicit, pornographic, pedophilic content,
                promulgate hate speech, carry out illegal activities or
                otherwise infringe or violate your rights including any patent,
                copyright, trademark, trade secret or other proprietary rights,
                please feel free to contact the Grievance Officer any time at:
                <br />
                Name: Mahua Mukherjee <br />
                Contact Details:{" "}
                <a href="mailto:report@thestarinme.com">
                  report@thestarinme.com
                </a>
              </p>
            </ol>

            <h4>
              I HAVE READ THESE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS
              CONTAINED ABOVE.
            </h4>
            <h5>
              I hereby agree to these Terms of Use and the Privacy Policy.
            </h5>
          </div>{" "}
          <div className={styles.footer}>
            <FooterContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
