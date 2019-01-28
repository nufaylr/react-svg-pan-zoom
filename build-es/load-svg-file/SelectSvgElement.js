var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { SvgProxy } from 'react-svgmt';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
var SelectSvgElement = function SelectSvgElement(props) {
    var selector = props.selector,
        other = _objectWithoutProperties(props, ['selector']);

    return React.createElement(SvgProxy, _extends({ selector: selector }, other));
};

SelectSvgElement.defaultProps = {
    selector: PropTypes.string.isRequired
};

export { SelectSvgElement };