import { createGlobalStyle } from 'styled-components';

import img from '../../assets/images/bg-1.png';

export const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
}

  body {
    margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: ${({ theme }) => theme.body};
	background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
	overflow-x: hidden;
    transition: all 0.55s linear;
	background-image: url(${img});
  }

  .timeline .timeline_title{
	color: ${({ theme }) => theme.text};
  }

  .timeline .timeline_link{
	color: ${({ theme }) => theme.text};
  }

  .header .header_link {
	color: ${({ theme }) => theme.text} !important;
  }

  .MuiPaper-root {
	background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	background: ${({ theme }) => theme.bag};
  }

  code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
  `;
