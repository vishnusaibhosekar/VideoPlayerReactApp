import React from "react";

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.hanldeClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const target = e.target.value;
        this.props.chooseVideo(target);
    }

    render() {
        return (
        <form onClick={this.hanldeClick}>
            <input type="radio" name="src" value="fast" /> fast
            <input type="radio" name="src" value="slow" /> slow
            <input type="radio" name="src" value="cute" /> cute
            <input type="radio" name="src" value="eek" /> eek
        </form>
        );
    }
}
