import React from 'react';
import { func, string } from 'prop-types';
import styled, { css } from 'styled-components';

import { ReactComponent as MoonSVG } from '../../assets/logos/moon.svg';
import { ReactComponent as SunSVG } from '../../assets/logos/sun.svg';

const ThemeIcon = css`
	width: 2rem;
	height: 2rem;
	cursor: pointer;
	float: right;
`;

const MoonIcon = styled(MoonSVG)`
	${ThemeIcon}
`;

const SunIcon = styled(SunSVG)`
	${ThemeIcon}
`;

const Toggle = ({ theme, toggleTheme }) => {
	if (theme === 'light') return <MoonIcon onClick={toggleTheme} />;

	return <SunIcon onClick={toggleTheme} />;
};

Toggle.propTypes = { theme: string.isRequired, toggleTheme: func.isRequired };

export default Toggle;
