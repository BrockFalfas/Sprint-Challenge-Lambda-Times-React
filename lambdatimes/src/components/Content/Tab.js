import React, {Component} from 'react';
import PropTypes from "prop-types"

const Tab = props => {
  let className
  if (props.tab === props.selectedTab) {
    className="tab active-tab"
  } else {
    className="tab"
  }

  return (
      <div
        className={className}
        onClick={() => {
          props.selectTabHandler(props.tab)
      }}>
      {props.tab.toUpperCase()}
      </div>
  )
}

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
}

export default Tab;
