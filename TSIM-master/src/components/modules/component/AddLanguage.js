import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./AddSkills.css";
import Input2 from "../../../core/Input2";
import Button from "../../../core/Button";
import TagsInput from "../../general/TagsInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Back from "../../../images/Back.svg";
import MobileOnly from "../../general/MobileOnly";
const animatedComponents = makeAnimated();

export default class AddLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      totalSkills: [],
      options: [],
      skillsIds: [],
      tags: this.props.getUserLanguages ? this.props.getUserLanguages : {}
    };
  }

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.getUserLanguages !== this.props.getUserLanguages) {
  //     let newArray = nextProps.getUserLanguages.map(val => {
  //       return { value: val.id, label: val.name };
  //     });
  //     if (nextProps.getUserLanguages.length !== 0) {
  //       this.setState({
  //         options: newArray
  //       });
  //     }
  //   }
  //   if (nextProps.postUserLanguages !== this.props.postUserLanguages) {
  //     if (nextProps.postUserLanguages) {
  //       this.props.closeModal();
  //     }
  //   }
  // };

  onSkillChange(skills) {
    let existingTag = this.state.tags;

    let mappedSkills = skills.map(val => {
      return { languageId: val.value, name: val.label };
    });

    existingTag.push(...mappedSkills);
    this.setState({
      tags: existingTag
    });
  }

  upload = () => {
    const reqBody = {
      languageIds: this.state.tags.map(val => {
        return val.languageId;
      })
    };
    if (this.props.postUserLanguage) {
      this.props.postUserLanguage(reqBody);
      // window.location.reload();
      this.props.closeModal();
    }
  };

  componentWillReceiveProps = nextProps => {
    // if (
    //   nextProps.professionalLanguages !== this.props.professionalLanguages ||
    //   nextProps.professionalLanguages !== this.props.professionalLanguages
    // ) {
    //   window.location.reload();
    // }
  };

  // onKeyChange = key => {
  //   console.log(key);
  //   if (key) {
  //     var keyVal = key;
  //     this.props.getUserSkill(keyVal);
  //   }
  // };

  componentDidMount = key => {
    // let getUserLanguages = this.props && this.props.language;
    // if (getUserLanguages !== null) {
    //   this.setState({
    //     options: getUserLanguages
    //   });
    // }
    // let skillId = this.props.getUserLanguages.map(val => {
    //   return val.languageId;
    // });
    // let name = this.props.getUserLanguages.map(val => {
    //   return val.name;
    // });
    // if (this.props.getUserLanguages) {
    //   this.setState({
    //     totalSkills: name,
    //     skillsIds: skillId
    //   });
    // }
  };

  render() {
    return (
      <BottomSlideModal width="50%">
        <div className={styles.base}>
          <React.Fragment>
            <MobileOnly>
              <div
                onClick={this.props.closeModal}
                className={styles.backCircle}
              >
                <img src={Back} className={styles.backImg} alt="" />
              </div>
            </MobileOnly>
            <div className={styles.title}>Add Languages</div>
            <div className={styles.selectSection}>
              {this.state.options && (
                <Select
                  closeMenuOnSelect={true}
                  // components={animatedComponents}
                  isMulti
                  isSearchable
                  options={this.props.language.map(val => {
                    return { value: val.id, label: val.name };
                  })}
                  onChange={val => this.onSkillChange(val)}
                />
              )}
            </div>
            {this.state.options.length !== 0 && (
              <TagsInput value={this.state.totalSkills} />
            )}
            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                color={"#fff"}
                backgroundColor={"#4F439A"}
                height={50}
                width={"100%"}
                label="SUBMIT"
                borderRadius={3}
                onClick={() => this.upload()}
              />
            </div>
          </React.Fragment>
        </div>
      </BottomSlideModal>
    );
  }
}
