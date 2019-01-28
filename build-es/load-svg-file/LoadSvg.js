import React from 'react';
import PropTypes from 'prop-types';
import { SvgLoader } from 'react-svgmt';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
var LoadSvg = function LoadSvg(props) {
    return React.createElement(
        'div',
        null,
        props.render(React.createElement(
            SvgLoader,
            { path: props.src },
            props.proxy ? props.proxy : ""
        ))
    );
};

LoadSvg.defaultProps = {
    src: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired,
    proxy: PropTypes.node
};

export { LoadSvg };