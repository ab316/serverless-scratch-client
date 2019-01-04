import React, { Component }  from 'react';
import { API, Storage } from 'aws-amplify';
import config from '../config';

export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.file = null;
        this.state = {
            note: null,
            content: '',
            attachmentUrl: null
        };
    }

    async componentDidMount() {
        try {
            let attachmentUrl;
            const note = await this.getNote();
            const { content, attachment } = note;

            if (attachment) {
                attachmentUrl = await Storage.vault.get(attachment);
            }

            this.setState({
                note,
                content,
                attachmentUrl
            });
        } catch (e) {
            alert(e);
        }
    }

    getNote() {
        return API.get('notes', `/notes/${this.props.match.params.id}`);
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    formatFileName(str) {
        return str.replace(/^\w+-/, '')
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
            alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB`);
            return;
        }
        this.setState({ isLoading: true });
    }

    handleDelete = async event => {
        event.preventDefault();

        const confirmed = window.confirm("Are you sure you want to delete this note?");
        if (!confirmed) {
            return;
        }
    }

    render() {
        return <div className='Notes'></div>;
    }
}