import * as React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgGithub({ fill, size }) {
  return (
    <Svg height={size} viewBox="0 0 32 32" width={size}>
      <Path
        d="M16 .396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18.8.151 1.093-.344 1.093-.769 0-.38-.013-1.387-.02-2.72-4.451.965-5.389-2.147-5.389-2.147-.728-1.847-1.78-2.34-1.78-2.34-1.449-.992.112-.972.112-.972 1.607.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331.144-1.035.556-1.74 1.013-2.14-3.553-.4-7.288-1.776-7.288-7.907 0-1.747.62-3.173 1.647-4.293-.18-.404-.72-2.031.14-4.235 0 0 1.34-.429 4.4 1.64 1.28-.356 2.64-.532 4-.54 1.36.008 2.72.184 4 .54 3.04-2.069 4.38-1.64 4.38-1.64.86 2.204.32 3.831.16 4.235 1.02 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893.56.48 1.08 1.461 1.08 2.96 0 2.141-.02 3.861-.02 4.381 0 .42.28.92 1.1.76C27.42 29.455 32 23.455 32 16.395c0-8.836-7.164-16-16-16z"
        fill={fill}
      />
    </Svg>
  );
}

SvgGithub.defaultProps = {
  fill: colors.white,
  size: 24
};

SvgGithub.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default React.memo(SvgGithub);
