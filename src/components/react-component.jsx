import React from 'react'
import {} from '@polymer/paper-input/paper-input.html';
import {} from '@polymer/paper-button/paper-button.html';

export class ReactComponent extends React.Component {
  render () {
    return (
      <article>
        <h1>A react rendered component.</h1>
        <em>With Polymer elements</em>
        <paper-input label='Input Label'></paper-input>
        <paper-button raised>ok</paper-button>
      </article>
    )
  }
}
