import React, { Component } from 'react';
import classnames from 'classnames';
import './styles/style.css'

class ViewComponent extends Component {
  constructor(props){
    super(props)
    this.state ={
      isVisibleDesc:false
    }
  }
    render() {
      const { 
        name,
        price,
        img,
        isThere,
        description
      } = this.props;

      const {
        isVisibleDesc
      } = this.state;

      return (
          <div 
            className='Phone-Elem__Block'
            onClick ={()=>{
              this.setState({
                isVisibleDesc: !isVisibleDesc
              })
            }}
          >

            <div className='Phone-Elem__Image-Block'>
                <img src={img}  alt=''/>
                <div className ='Phone-Elem__Info-Block'>
                  <div className='Phone-Elem__Name'>{name}</div>
                  <div className='Phone-Elem__Price'>{price}</div>
                </div>
            </div>

          

            <div 
              className={classnames('Phone-Elem__Hide-Block',{
                'show-desc':isVisibleDesc,
                'hide-desc':!isVisibleDesc
              })}
            >
              <div className='Phone-Elem__Description'>{description}</div>
              <div className={classnames('Phone-Elem__isThere',{
                'in-Stock':isThere,
                'out-Stock':!isThere
              })}>
                {isThere? 'in stock':'out stock'}
              </div> 
            </div>
              
          </div>
      );
    }
  }
  
  export default ViewComponent;