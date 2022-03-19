import React, { Component } from 'react';
import { Link } from "react-router-dom";

class UploadFileGallery extends Component {


    state = {
        fileUniqueID: 1234,
        upload_error_message: "-",
        upload_filename_label: this.props.upload_filename_label ? this.props.upload_filename_label : "",
        img_src_class: ""
    }

    preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    highlight = (e) => {
        let upload_drop_area_id = document.getElementById("uf_" + this.state.fileUniqueID);
        upload_drop_area_id.classList.add('highlight');
    }

    unhighlight = (e) => {
        let upload_drop_area_id = document.getElementById("uf_" + this.state.fileUniqueID);
        upload_drop_area_id.classList.remove('highlight');
    }

    handleDrop = (e) => {
        let dt = e.dataTransfer
        let files = dt.files

        this.handleFiles(files);
    }

    handleErrorMessage = (message) => {
        //console.log("message", message);
        let upload_drop_area_id = document.getElementById("em_" + this.state.fileUniqueID);
        this.setState({ upload_error_message: message });

        upload_drop_area_id.style.transition = '0.5s';
        upload_drop_area_id.style.opacity = 1;
        setTimeout(() => {
            upload_drop_area_id.style.transition = '0.5s';
            upload_drop_area_id.style.opacity = 0;

        }, 5000);
    }

    handleFiles = (file) => {
        console.log("inside handle files", file);
        if (file.length > 1) {
            return this.handleErrorMessage("Limit to 1 upload only!");
        }

        if (file[0].size > 1000000) {
            return this.handleErrorMessage("File exceeded the maximum size");
        }

        let acceptedFileType = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
        let fileType = file[0].type;
        if (!acceptedFileType.includes(fileType)) {
            return this.handleErrorMessage("Invalid file type! Allowed images are JPG, PNG or GIF only");
        }

        let filename = file[0].name;
        //document.getElementById("label_" + this.state.fileUniqueID).innerHTML = filename;
        this.setState({ upload_filename_label: filename });
        //upload_drop_area_id.classList.add('highlight');

        this.props.handleFile(file, this.props.name);
    }

    componentDidMount = () => {
        //console.log("Upload file", this.props);

        let dropInput = document.getElementById("uf_" + this.state.fileUniqueID);
        let dragDrop = ['dragenter', 'dragover', 'dragleave', 'drop'];

        dragDrop.forEach(eventName => {
            dropInput.addEventListener(eventName, this.preventDefaults, false)
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropInput.addEventListener(eventName, this.highlight, false)
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropInput.addEventListener(eventName, this.unhighlight, false)
        })

        dropInput.addEventListener('drop', this.handleDrop, false);

        this.setImagePreview();


    }

    setImagePreview = () => {
        let img_src_class = this.props.img_src != "" ? "image_w150 mr-10 image_mw250" : ""
        let img_content = <div><img src={this.props.img_src} className={img_src_class} /></div>
        this.setState({ img_content: img_content });
    }

    componentDidUpdate = (newProps) => {
        console.log("Upload file new props", newProps);
        console.log("Upload file this state", this.state);
        if (newProps.upload_filename_label != this.state.upload_filename_label) {
            this.setImagePreview();
            this.setState({ upload_filename_label: this.props.upload_filename_label });
        }

    }

    render() {

        //uf stands for upload file
        let upload_drop_area_id = "uf_" + this.state.fileUniqueID;
        //em stands for error message
        let upload_em = "em_" + this.state.fileUniqueID;
        let text_container_id = "txtcon_" + this.state.fileUniqueID;
        let filename_label_id = "label_" + this.state.fileUniqueID;

        return (
            <div className="mixinUploadFile">
                <div className={"upload_drop_area " + this.props.custom_upload_class} id={upload_drop_area_id}>
                    <div className="flex-center">
                        {this.state.img_content}
                        <div>
                            <div id={text_container_id}>
                                <p >Upload image with the file dialog or by dragging and dropping images onto the dashed region.</p>
                                <p className="upload_allowed_text">(Allowed images are JPG, PNG or GIF only. Maximum of 1MB and preferably 500x500)</p>
                            </div>
                            <input type="file" name={this.props.name} className="upload_input_file" id={this.state.fileUniqueID} accept="image/png, image/jpeg, image/jpg, image/gif" onChange={(e) => this.handleFiles(e.target.files)} />
                            <label className="upload_file_button upload_select_image" for={this.state.fileUniqueID}>Upload</label>
                            <span id={filename_label_id} className="upload_filename_label">{this.state.upload_filename_label}</span>
                        </div>
                    </div>
                </div>
                <div className="upload_error_message upload_error_message_fade" id={upload_em}>{this.state.upload_error_message}</div>
            </div>
        );
    }
}

export default UploadFile