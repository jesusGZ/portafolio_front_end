import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import CustomTimeline, { CustomTimelineSeparator } from '../../components/CustomTimeline/CustomTimeline';
import { CustomButton } from '../../components/Button/Button';
import resumeData from '../../utilis/resumeData';
import { userInfo } from '../../services/user';
import constants from '../../constants';

const { USER_ID } = constants;

import './Profile.css';

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
	const [dataUser, setDataUser] = useState({});

	const handleUserInfo = async () => {
		try {
			const data = await userInfo(USER_ID);

			if (data.status !== 'success') return data.message;

			const { nombre, email, user, telefono } = data.data;

			return setDataUser({ nombre, email, user, telefono });
		} catch (error) {
			console.log(error);
			//error
			return;
		}
	};

	useEffect(() => {
		if (Object.keys(dataUser).length === 0) handleUserInfo();
	}, []);

	return (
		<div className="profile containeer_shadow">
			<div className="profile_name">
				<Typography className="name">{dataUser.nombre}</Typography>
				<Typography className="title">{resumeData.title}</Typography>
			</div>

			<figure className="profile_image">
				{/* <img src={profileImage} alt="profile image" /> */}
				{/* <img src={require('../../assets/images/profile.jpeg').default} alt="" /> */}
				<img src="https://avatars.githubusercontent.com/u/76445991?v=4" alt="" />
			</figure>

			<div className="profile_information">
				<CustomTimeline icon={<PersonOutlineIcon />}>
					<CustomTimelineItem title="Nombre" text={dataUser.nombre} />
					<CustomTimelineItem title="Ocupación" text={resumeData.title} />
					<CustomTimelineItem title="Correo" text={<a href={'mailto:' + dataUser.email}>{dataUser.email}</a>} />
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
