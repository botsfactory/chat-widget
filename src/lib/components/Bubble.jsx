import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    ${props => props.who == 'me' && `
        flex-direction: row-reverse;
    `}

    ${props => props.who == 'other' && `
        flex-direction: row;
    `}
`

const Text = styled.div`
    border-radius: 25px;
    font-size: 14px;
    font-weight: normal;
    margin: 4px 0px;
    padding: 8px 18px;
    line-height: 1.4;
    opacity: ${props => props.sent ? 1 : .7};
    
    ${props => props.who == 'me' && `
        background: #0084ff;
        color: #fff;
    `}

    ${props => props.who == 'other' && `
        background: #D8D8D8;
        color: #2B2B2B;
    `}
`

export default class Bubble extends React.Component {

    render() {

        return (
            
            <Wrapper who={this.props.who}>
                <Text sent={this.props.sent} who={this.props.who}>{this.props.children}</Text>
            </Wrapper >
        );
    }
}

Bubble.propTypes = {
    who: PropTypes.oneOf(['me', 'other']).isRequired,
    sent: PropTypes.bool.isRequired,
}