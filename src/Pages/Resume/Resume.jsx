import React, { useState, useEffect } from 'react';

import TimelineContent from '@material-ui/lab/TimelineContent';
import { Grid, Paper, Typography } from '@material-ui/core';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import CustomTimeline, { CustomTimelineSeparator } from '../../components/CustomTimeline/CustomTimeline';
import { certificationsInfo } from '../../services/certifications';
import TimelineSVG from './components/TimelineSVG/TimelineSVG';
import resumeData from '../../utilis/resumeData';
import constants from '../../constants';

const { USER_ID } = constants;

import './Resume.css';

export const Resume = () => {
	const [dataCertifications, setDataCertifications] = useState([]);

	const handleCertificationsInfo = async () => {
		try {
			const data = await certificationsInfo(USER_ID);

			if (data.status !== 'success') return data.message;

			return setDataCertifications(data.data);
		} catch (error) {
			console.log(error);
			//error
			return;
		}
	};

	function certifications() {
		let position = 0;

		const timeline_certifications = dataCertifications.map((cert) => {
			position = position + 1;

			// asignacion de posicionamiento en la linea de tiempo
			position % 2 == 0 ? (cert.side = 'left') : (cert.side = 'right');

			return <TimelineSVG key={cert._id} side={cert.side} title={cert.titulo} date={cert.fecha_} organization={cert.organizacion} link={cert.link} />;
		});

		return timeline_certifications;
	}

	useEffect(() => {
		if (dataCertifications.length === 0) handleCertificationsInfo();
	}, []);

	return (
		<>
			<Grid container justifyContent="flex-start" className="section pb_45 pt_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">Hacerca de mí</h6>
				</Grid>
				<Grid item xs={12}>
					<Typography className="aboutme_text" variant="body2">
						{resumeData.about}
					</Typography>
				</Grid>
			</Grid>
			<Grid container justifyContent="flex-start" className="section pb_45">
				<Grid item className="section_title mb_30">
					<span></span>
					<h6 className="section_title_text">Preparación</h6>
				</Grid>
				<Grid container justifyContent="flex-start" className="resume_timeline">
					<Grid item xs={12} sm={6}>
						<CustomTimeline title="Experiencia Laboral" icon={<WorkIcon />}>
							{resumeData.experiences.map((exp) => (
								<TimelineItem>
									<CustomTimelineSeparator />
									<TimelineContent className="timeline_content">
										<Typography className="timeline_title">{exp.title}</Typography>
										<Typography variant="caption" className="timeline_date">
											{exp.date}
										</Typography>
										<Typography className="timeline_description">{exp.description}</Typography>
									</TimelineContent>
								</TimelineItem>
							))}
						</CustomTimeline>
					</Grid>
					<Grid item xs={12} sm={6}>
						<CustomTimeline title="Educación" icon={<SchoolIcon />}>
							{resumeData.education.map((edu) => (
								<TimelineItem>
									<CustomTimelineSeparator />
									<TimelineContent className="timeline_content">
										<Typography className="timeline_title">{edu.title}</Typography>
										<Typography variant="caption" className="timeline_date">
											{edu.date}
										</Typography>
										<Typography className="timeline_description">{edu.description}</Typography>
									</TimelineContent>
								</TimelineItem>
							))}
						</CustomTimeline>
					</Grid>
				</Grid>
			</Grid>
			<Grid container justifyContent="flex-start" className="section ">
				<Grid item className="section_title section">
					<span></span>
					<h6 className="section_title_text">Habilidades</h6>
				</Grid>
				<Grid container justifyContent="flex-start" spacing={3} justify="space-between" className="section pb_45 pt_25">
					{resumeData.skills.map((skill) => (
						<Grid item xs={12} sm={6} md={3} lg={3}>
							<Paper elevation={0} className="skill">
								<Typography variant="h6" className="skill_titles">
									{skill.title}
								</Typography>
								{skill.description.map((element) => (
									<Typography variant="body2" className="skill_description">
										<TimelineDot variant={'outlined'} className="timeline_dot" />
										{element}
									</Typography>
								))}
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid container justifyContent="flex-start" className="section pb_10 ">
				<Grid item className="section_title section ">
					<span></span>
					<h6 className="section_title_text ">Cursos</h6>
				</Grid>
				<Grid container justifyContent="flex-start" className="pt_25 ">
					<Grid item xs={12}>
						{certifications()}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
