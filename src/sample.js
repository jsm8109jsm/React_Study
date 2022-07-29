import React, { Component } from 'react'

export default class sample extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState);
        if (snapshot) {
          console.log("업데이트 되기 직전 색상: ", snapshot);
        }
      }
    render() {
        return (
            <div>sample</div>
        )
    }
}
