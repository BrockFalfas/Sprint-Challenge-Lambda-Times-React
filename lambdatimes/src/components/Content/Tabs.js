import React, {Component} from 'react';
import Tab from './Tab';
import PropTypes from "prop-types"

const Tabs = (props) => {
  return (
    <div className="tabs">

        <span className="title">TRENDING TOPICS:</span>
          <div className="topics">
            {props.tabs.map((tab, index) => (
              <Tab
                tab={tab}
                key={index}
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
              />
        ))}
        </div>
      </div>
  )
}

  Tabs.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    selectTabHandler: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.string)
  }

export default Tabs;
