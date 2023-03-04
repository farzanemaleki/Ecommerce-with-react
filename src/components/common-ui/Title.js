import React from 'react';
import '../../assets/css/title.css'

const Title= (props) => {
  return (
    <>
    <h2 className="title"><span>{props.children}</span></h2>
    </>
  )
}
export default Title;