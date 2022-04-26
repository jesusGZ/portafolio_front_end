import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../CustomTimeline/CustomTimeline';
import resumeData from '../../utilis/resumeData';
import { Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TelegramIcon from '@material-ui/icons/Telegram';

import './Profile.css';
import { CustomButton } from '../Button/Button';

const CustomTimelineItem = ({ title, text, link }) => (
	<TimelineItem>
		<CustomTimelineSeparator />
		<TimelineContent className="timeline_content">
			{link ? (
				<Typography className="timelineItem_text">
					<span>{title}:</span>{' '}
					<a href={link} target="_blank" rel="noreferrer">
						{text}
					</a>
				</Typography>
			) : (
				<Typography className="timelineItem_text">
					<span>{title}:</span> {text}
				</Typography>
			)}
		</TimelineContent>
	</TimelineItem>
);

const Profile = () => {
	return (
		<div className="profile containeer_shadow">
			<div className="profile_name">
				<Typography className="name">{resumeData.name}</Typography>
				<Typography className="title">{resumeData.title}</Typography>
			</div>

			<figure className="profile_image">
				{/* <img src={profileImage} alt="profile image" /> */}
				{/* <img src={require('../../assets/images/profile.jpeg').default} alt="" /> */}
				<img src="https://avatars.githubusercontent.com/u/76445991?v=4" alt="" />
			</figure>

			<div className="profile_information">
				<CustomTimeline icon={<PersonOutlineIcon />}>
					<CustomTimelineItem title="Nombre" text={resumeData.name} />
					<CustomTimelineItem title="Ocupación" text={resumeData.title} />
					<CustomTimelineItem title="Correo" text={<a href={'mailto:' + resumeData.email}>{resumeData.email}</a>} />
					<CustomTimelineItem title="Dirección" text={resumeData.adress} />
				</CustomTimeline>
				<br />
				<div className="button_container">
					<CustomButton text={'Contactame'} icon={<TelegramIcon />} />
				</div>
			</div>
		</div>
	);
};

export default Profile;
