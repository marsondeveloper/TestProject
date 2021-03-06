import React, {Component} from "react";
import TextInput from "../AnswersComponents/TextInput";
import RadioButton from "../AnswersComponents/RadioButton";
import Modal from "../ModalWindow/ModalWindow";
import Checkbox from "../AnswersComponents/Checkbox";
import Select from "../AnswersComponents/Select";
import {Redirect} from "react-router-dom";
import dataJson from "../../JSON/tsconfig";
import '../../App.css';

class PageQuestions extends Component {
    state = {
        pointsCheckbox: []
    };
    addPointCheckbox = (checkpoint, i, index) => {
        const arr = [...this.state.pointsCheckbox];
        arr[i] = checkpoint;
            this.setState({pointsCheckbox: arr}
            );
            let point = arr.reduce((a,currentItem) => typeof currentItem === 'number' ? a + currentItem : a, 0);
            this.props.addPoint(index, point)
        };
        


         questions = dataJson.data.map((e, i) => <li key={e.id}  className='container'>

             {e.question}

                <TextInput addPoint={this.props.addPoint} index={i} type={e.type} answers={e.answersArr} />

                <RadioButton type={e.type} name={e.name} answers={e.answersArr} index={i} addPoint={this.props.addPoint} />

                <Checkbox type={e.type} answers={e.answersArr} index={i} addPointCheckbox={this.addPointCheckbox} />

                <Select type={e.type} answers={e.answersArr} index={i} addPoint={this.props.addPoint} />
            </li>
        );
         

    render() {
        if (this.props.state.redirect) {
            return <Redirect to={'/result'}/>
        }
        return (
            
            <div>
                <ol>{this.questions}</ol>
                <div className="container">
                    <button className='btn' onClick={this.props.result}>Ответить</button>
                </div>
                <Modal isOpenModal={this.props.state.isOpenModal} setIsCloseModal={this.props.setIsCloseModal}/>
            </div>
        )
    }
}

export default PageQuestions;
