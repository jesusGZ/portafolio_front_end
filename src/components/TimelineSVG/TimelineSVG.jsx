import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import './TimelineSVG.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
		textAlign: 'center',
	},
	secondaryTail: {
		backgroundColor: 'var(--main-color)',
	},
	svgContan: {
		borderColor: 'var(--main-color)',
	},
	container: {
		marginBottom: 0,
	},
}));

export default function TimelineCer({ date, title, link, side, organization }) {
	const classes = useStyles();

	return (
		<Timeline align={side} className="timeline">
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" className="timeline_date">
						{date}
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot variant="outlined" className={classes.svgContan}>
						<svg viewBox="0 0 64 60" width="24" height="24">
							<path
								d="M48.5 15.8l-2.443-.106c-7.383 0-12.163 3.93-14.818 8.498l-6.427 11.366c-1.7 2.7-3.983 3.877-7.064 3.877-4.408 0-8.02-3.346-8.02-7.436s3.612-7.436 8.02-7.436c2.602 0 4.515.7 6.055 2.4l4.727-7.807a18.62 18.62 0 00-10.888-3.505C7.914 15.642 0 22.918 0 31.947c0 7.595 5.63 13.968 13.278 15.774 1.38.32 2.868.53 4.355.53h.372c5.8-.106 11.313-1.965 14.022-6.85l7.117-12.8c1.328-2.07 2.55-2.974 4.408-3.558a9.013 9.013 0 012.7-.425c4.408 0 8.02 3.346 8.02 7.436S50.67 39.5 46.262 39.5c-3.612 0-5.842-.903-7.967-3.558l-4.568 7.5c3.187 3.027 7.7 4.94 12.64 4.94 9.72 0 17.633-7.276 17.633-16.305.053-8.392-6.745-15.296-15.5-16.252z"
								fill="var(--main-color)"
							/>
						</svg>
					</TimelineDot>
					<TimelineConnector className="connector" />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="h6" component="h1" className="timeline_title">
							{title}
						</Typography>
						<Typography>
							<Link href={link} target="_blank" color="textSecondary" className="timeline_link">
								Ver credencial en {organization}
							</Link>
						</Typography>
					</Paper>
					<TimelineConnector />
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
