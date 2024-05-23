import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="News"/>
      <Button name="Songs"/>
      <Button name="Movies"/>
      <Button name="Games"/>
      <Button name="Valantines"/>
      <Button name="Trending"/>
      <Button name="Sports"/>
      <Button name="Comedy"/>
      <Button name="Nature"/>
      <Button name="Cartoon"/>
      <Button name="Drama"/>
      <Button name="Live"/>
      <Button name="Vlogs"/>
    </div>
  )
}

export default ButtonList;