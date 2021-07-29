import React, { useState, useEffect } from 'react';
import Header from './header';
import CreateNote from './createNote';
import Notes from './notes';

//get the data from localStorage
const getLocalItems = () => {
	let notes = localStorage.getItem('notes');
	console.log(notes);
	if (notes) {
		return JSON.parse(localStorage.getItem('notes'));
	} else {
		return [];
	}
};
const MiniGoogleKeepApp = () => {
	const [ addNote, setAddNote ] = useState(getLocalItems());
	const passNote = (note) => {
		console.log(note);
		setAddNote([ ...addNote, note ]);
	};
	useEffect(
		() => {
			localStorage.setItem('notes', JSON.stringify(addNote));
		},
		[ addNote ]
	);
	const onDelete = (id) => {
		const newaddNotes = addNote.filter((currentData, index) => {
			return index !== id;
		});
		setAddNote(newaddNotes);
	};
	return (
		<React.Fragment>
			<Header />
			<CreateNote handlerClickPass={passNote} />
			<div className="notes container">
				{addNote.map((item, index) => {
					return (
						<Notes key={index} id={index} title={item.title} content={item.content} deleteItem={onDelete} />
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default MiniGoogleKeepApp;
