import React from 'react';
import Gallery from 'react-image-gallery';

// #CSS
import 'react-image-gallery/styles/css/image-gallery.css';
import './ImageGallery.css';

export const ImagesGallery = (props) => {
	const imageList = props.images.map((image) => {
		return {
			original: image,
			thumbnail: image,
		};
	});
	return (
		<div>
			<Gallery items={imageList} showBullets showThumbnails={true} />
		</div>
	);
};
