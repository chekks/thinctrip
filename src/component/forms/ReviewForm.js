import React, { Component } from 'react'
import r from '../../assets/scss/client/review.module.scss'
import f from '../../assets/scss/client/forms.module.scss'
import { Button, Avatar } from '../../mainStyles'

//Component
import HeaderPanel from '../../component/HeaderPanel'
import Rate from '../reviews/Rate'

//Icons
import { AiFillStar, AiOutlineCloudUpload } from 'react-icons/ai'

export default class ReviewForm extends Component {
    fileObj = [];
    fileArray = [];

    state = {
        currentValue: 0,
        hoverValue: undefined,
        colors: {
            orange: "#FFBA5A",
            grey: "#a9a9a9"
            
        },
        file: [null]
    }

    uploadMultipleFiles = this.uploadMultipleFiles.bind(this)

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })

        console.log(this.fileObj);
    }

    displayImages() {
        if(this.fileArray.length > 0){
            return([
                <div>
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>
            ])
        }else{
            return(
                <span><AiOutlineCloudUpload size={40}/>Upload Image</span>
            )
        }
    }

    deleteFile(e) {
        let s = this.file.filter((item, index) => index !== e);
        this.setState({ file: this.s })
        console.log(s);
    }

    handleClick = (value) => {
        this.setState({currentValue: value})
    }

    handleMouseOver = (newHoverValue) => {
        this.setState({hoverValue: newHoverValue})
    };

    handleMouseLeave = () => {
        this.setState({hoverValue: undefined})
    }

    handleRating = () => {
        const stars = Array(5).fill(0);

        return([
            <div>
                {stars.map((_, index) => {
                    return([
                        <AiFillStar 
                        key={index}
                        size={24}
                        onClick={() => this.handleClick(index + 1)}
                        onMouseOver={() => this.handleMouseOver(index + 1)}
                        onMouseLeave={this.handleMouseLeave}
                        color={(this.state.hoverValue || this.state.currentValue) > index ? this.state.colors.orange : this.state.colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        />
                    ])
                })}
            </div>
        ])
    }

    render() {

        return (
            <React.Fragment>
                <HeaderPanel
                    type="review"
                    title="FROM HIGHLANDS TO ISLANDS — 12D & 11N"
                    bg="https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg"
                />
                <div className={r.commentContainer}>
                    <form className={f.formWrapper}>
                        <div className={f.formInput}>
                            <label className={f.inputLabel}>Rate Your Experience</label>
                            {this.handleRating()}
                        </div>
                        <div className={f.formInput}>
                            <label className={f.inputLabel}>What's your experience?</label>
                            <textarea type="text" autoComplete="off" className={`${f.inputText} ${f.inputTextarea}`}></textarea>
                        </div>
                        <div className={f.formInput}>
                            <label className={f.inputLabel}>Give it a title</label>
                            <input type="text" autoComplete="off" className={f.inputText}/>
                        </div>

                        <div className={f.formInput}>
                            <label className={f.inputLabel}>When was your tour?</label>
                            <input type="date" autoComplete="off" className={f.inputText}/>
                        </div>

                        <div className={f.formInput}>
                            <label className={f.inputLabel}>Type of tour</label>
                            <input type="text" autoComplete="off" className={f.inputText}/>
                        </div>

                        <div className={f.formInput}>
                            <label className={f.inputLabel}>Upload image</label>
                            <div className={f.inputUploadContainer}>
                                <input 
                                multiple
                                type="file" 
                                name="photo"
                                className={f.inputUpload} 
                                onChange={this.uploadMultipleFiles}/>

                                {this.displayImages()}
                            </div>
                        </div>

                        <div className={`${f.formInput} ${f.formFlex}`}>
                            <input type="checkbox" autoComplete="off" className={f.inputCheckbox}/>
                            <p className={f.inputLabel}>* I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews.</p>
                        </div>

                        <Button className={f.formButton}>Submit your review</Button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
