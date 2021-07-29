import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = ({ handlerClickPass }) => {
	const [ expand, setExpand ] = useState(false);
	const [ note, setNote ] = useState({
		title: '',
		content: ''
	});
	const handlerInput = (e) => {
		const { name, value } = e.target;
		console.log(`name is: ${name}`);
		console.log(`value is: ${value}`);
		setNote({ ...note, [name]: value });
	};
	const handlerClick = () => {
		handlerClickPass(note);
		setNote({
			title: '',
			content: ''
		});
	};
	const expandIt = () => {
		setExpand(true);
	};
	const expandClose = () => {
		setExpand(false);
	};

	return (
		<React.Fragment>
			<div className="main_note">
				<form className="form_style">
					{expand ? (
						<input
							type="text"
							name="title"
							value={note.title}
							onChange={handlerInput}
							placeholder="Title"
							autoComplete="off"
							className="mb-2"
						/>
					) : null}
					<textarea
						name="content"
						value={note.content}
						onChange={handlerInput}
						cols=""
						rows=""
						placeholder="write a note..."
						className="mb-2"
						onClick={expandIt}
						onDoubleClick={expandClose}
					/>
					{expand ? (
						<Button onClick={handlerClick}>
							<AddIcon className="plus_sign" />
						</Button>
					) : null}
				</form>
			</div>
		</React.Fragment>
	);
};

export default CreateNote;
