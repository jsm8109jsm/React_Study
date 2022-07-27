//Hello.js

import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음'
    }
    render() {
        const {color, isSpecial, name} = this.props; //비동기화
        return(
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕은 영어로 {name}
            </div>
        )
    }
}


export default Hello;