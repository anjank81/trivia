import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./AddSkills.css";
import Input2 from "../../../core/Input2";
import Button from "../../../core/Button";
import TagsInput from "../../general/TagsInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { TAG } from "postcss-selector-parser";
import Back from "../../../images/Back.svg";
import MobileOnly from "../../general/MobileOnly";

const animatedComponents = makeAnimated();

export default class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      totalSkills: [],
      options: [],
      skillsIds: [],
      tags: this.props.getUserSkills ? this.props.getUserSkills : {}
    };
  }

  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.getUserSkill !== this.props.getUserSkills) {
  //     let newArray = nextProps.getUserSkills.map(val => {
  //       return { value: val.id, label: val.name };
  //     });
  //     if (nextProps.getUserSkills.length !== 0) {
  //       this.setState({
  //         options: newArray
  //       });
  //     }
  //   }

  //   if (nextProps.postUserSkills !== this.props.postUserSkills) {
  //     if (nextProps.postUserSkills) {
  //       this.props.closeModal();
  //     }
  //   }
  // };

  onSkillChange(skills) {
    let existingTag = this.state.tags;

    let mappedSkills = skills.map(val => {
      return { skillId: val.value, name: val.label };
    });

    existingTag.push(...mappedSkills);
    this.setState({
      tags: existingTag
    });
  }

  upload = () => {
    const reqBody = {
      skillIds: this.state.tags.map(val => {
        return val.skillId;
      })
    };

    if (this.props.postUserSkills) {
      this.props.postUserSkills(reqBody);
      // window.location.reload();
      this.props.closeModal();
    }
  };

  componentWillReceiveProps = nextProps => {
    // if (
    //   nextProps.professionalSkills !== this.props.professionalSkills ||
    //   nextProps.professionalSkills !== this.props.professionalLanguages
    // ) {
    //   window.location.reload();
    // }
  };

  componentDidMount = key => {
    // let getUserSkills = this.props && this.props.skills;
    // this.setState({
    //   options: getUserSkills
    // });
    // let skillId = this.props.getUserSkills.map(val => {
    //   return val.skillId;
    // });
    // let name = this.props.getUserSkills.map(val => {
    //   return val.name;
    // });
    // if (this.props.getUserSkills) {
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
            <div className={styles.title}>Add Skills</div>
            <div className={styles.selectSection}>
              {this.state.options && (
                <Select
                  closeMenuOnSelect={true}
                  // components={animatedComponents}
                  isMulti
                  isSearchable
                  options={this.props.skills.map(val => {
                    return { value: val.id, label: val.name };
                  })}
                  onChange={val => this.onSkillChange(val)}
                />
              )}
            </div>
            <div className={styles.filtered}>
              {this.state.tags.length !== 0 && ( 
               <TagsInput value={this.state.tags} /> 
               )}
            </div>
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
                // disabled={!this.state.totalSkills.length}
              />
            </div>
          </React.Fragment>
        </div>
      </BottomSlideModal>
    );
  }
}
