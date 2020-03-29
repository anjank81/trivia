import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./AddSkills.css";
import Input2 from "../../../core/Input2";
import Button from "../../../core/Button";
import TagsInput from "../../general/TagsInput";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default class AddActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      totalSkills: [],
      options: []
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.getUserActivities !== this.props.getUserActivities) {
      let newArray = nextProps.getUserActivities.map(val => {
        return { value: val.id, label: val.name };
      });
      if (nextProps.getUserActivities.length !== 0) {
        this.setState({
          options: newArray
        });
      }
    }

    if (nextProps.postUserActivities !== this.props.postUserActivities) {
      if (nextProps.postUserActivities) {
        this.props.closeModal();
      }
    }
  };

  onSkillChange(skills) {
    let skillData = skills.map(skillData => {
      return skillData.value;
    });
    if (skillData) {
      this.setState({
        totalSkills: skillData
      });
    }
  }

  upload() {
    const reqBody = {
      skillIds: this.state.totalSkills
    };
    if (this.props.postUserActivity) {
      this.props.postUserActivity(reqBody);
    }
  }

  onKeyChange = key => {
    if (key) {
      var keyVal = key;

      this.props.getUserActivity(keyVal);
    }
  };

  render() {
    return (
      <BottomSlideModal width="50%">
        <div className={styles.base}>
          <React.Fragment>
            <div className={styles.title}>Add Activities</div>
            <div className={styles.selectSection}>
              {this.state.options && (
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={this.state.options}
                  onChange={val => this.onSkillChange(val)}
                  onInputChange={val => this.onKeyChange(val)}
                />
              )}

              {/* <Input2
                placeholder="Add Skills"
                value={this.state.skills}
                onChange={val => this.onSkillChange(val)}
                textStyle={{ fontSize: 14 }}
                height={50}
              ></Input2>
              {
                <div
                  className={styles.addButton}
                  onClick={() => this.addSkills()}
                ></div>
              }
 */}
            </div>
            {/* <div className={styles.filtered}>
              <TagsInput value={this.state.options} />
            </div> */}
            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                color={"#fff"}
                backgroundColor={"#4F439A"}
                height={50}
                width={"100%"}
                label="UPLOAD"
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
