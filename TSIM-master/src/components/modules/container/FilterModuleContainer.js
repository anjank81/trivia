import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getFilterList, getCityList } from "../../../actions/event.action";
import FilterModule from "../component/FilterModule";

const mapDispatchToProps = dispatch => {
  return {
    getFilterList: () => {
      dispatch(getFilterList());
    },
    getCityList: city => {
      dispatch(getCityList(city));
    }
  };
};
const mapStateToProps = state => {
  return {
    filterList: [
      ...state.event.filterList,
      { name: "Location", lists: state.event.cityList }
    ],
    filterLoader: state.event.filterLoader,
    cityList: state.event.cityList
  };
};
const FilterModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FilterModule)
);

export default FilterModuleContainer;
