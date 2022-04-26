import { CardActionArea, CardContent, CardMedia, Card, Grid, Tab, Tabs, Grow, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { ImagesGallery } from '../../components/ImageGallery/ImageGallery';

import React, { useState } from 'react';
import resumeData from '../../utilis/resumeData';
import './Portfolio.css';
export const Portfolio = () => {
	const [tabValue, setTabValue] = useState('All');
	const [projectDialog, setProjectDialog] = useState(false);

	return (
		<Grid container className="section pb_45 pt_45">
			<Grid item spacing={1} className="section_title mb_20">
				<span></span>
				<h6 className="section_title_text">Portafolio</h6>
			</Grid>
			<Grid item xs={12}>
				<Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(event, newValue) => setTabValue(newValue)}>
					<Tab label="All" value="All" className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />
					{[...new Set(resumeData.projects.map((item) => item.tag))].map((tag) => (
						<Tab label={tag} value={tag} className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'} />
					))}
				</Tabs>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={4}>
					{resumeData.projects.map((project) => (
						<>
							{tabValue === project.tag || tabValue === 'All' ? (
								<Grid item xs={12} sm={6} md={4}>
									<Grow in timeout={1000}>
										<Card className="customCard" onClick={() => setProjectDialog(project)}>
											<CardActionArea>
												<CardMedia className="customCard_img" image={project.images[0]} title={project.title} />
												<CardContent>
													<Typography variant={'body2'} className="customCard_title">
														{project.title}
													</Typography>
													<Typography variant="body2" className="customCard_caption">
														{project.caption}
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grow>
								</Grid>
							) : null}
						</>
					))}
				</Grid>
			</Grid>

			<Dialog open={projectDialog} className="projectDialog" onClose={() => setProjectDialog(false)} maxWidth={'lg'} fullWidth>
				<DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
				{/* <img src={projectDialog.image} alt="" className="projectDialog_img" /> */}
				<DialogContent style={{ height: '80vh' }}>
					{projectDialog.images && <ImagesGallery images={projectDialog.images} className="projectDialog_img" />}
					<Typography className="projectDialog_description">{projectDialog.description}</Typography>
					<DialogActions className="projectDialog_action">
						{projectDialog?.links?.map((link) => (
							<a href={link.link} target="_blank" className="projectDialog_icon" rel="noreferrer">
								{link.icon}
							</a>
						))}
					</DialogActions>
				</DialogContent>
			</Dialog>
		</Grid>
	);
};
