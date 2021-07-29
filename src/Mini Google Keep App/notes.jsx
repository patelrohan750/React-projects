import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Notes = ({ title, content, deleteItem, id }) => {
	const deleteNote = () => {
		deleteItem(id);
	};
	return (
		<React.Fragment>
			<div className="note">
				<h1>{title}</h1>
				<br />
				<p>{content}</p>
				<Button onClick={deleteNote}>
					<DeleteIcon className="deleteicon" />
				</Button>
			</div>
		</React.Fragment>
	);
};

export default Notes;
