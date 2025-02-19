import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

export class QuoteForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        content: '', 
        author: '' 
      }
    }
  handleOnChange = event => {   
    const { value, name } = event.target;  
      this.setState({
           [name]: value  
       }); 
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const quote = {...this.state, id: uuid()}
    this.props.addQuote(quote)
    debugger
    this.setState({
      content: '',
      author: ''
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form onSubmit={this.handleOnSubmit} className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea name="content"
                        className="form-control"
                        value={this.state.content} 
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author} 
                        onChange={this.handleOnChange}
                        name="author"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     addQuote: () => {
//       dispatch({type: 'ADD_QUOTE' })
//     }
//   };
// };

// //add arguments to connect as needed
export default connect(null, {addQuote})(QuoteForm);
