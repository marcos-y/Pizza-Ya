import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import './WhatsApp.css'
import icon from './whats.png';

const WhatsApp = () => {

    return (
        <>
            {['top'].map((placement) => (
                <>
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Title as="h3">WhatsApp:</Popover.Title>
                                <Popover.Content>
                                    <strong>+54 381 947030</strong> 
                                </Popover.Content>
                            </Popover>
                        }
                    >
                        {/*<Button id="botonw">Popover on {placement}</Button>*/}
                        
                        <input type="image" src={icon} className="icon"/>
                    </OverlayTrigger>{' '}
                </>
            ))}
        </>

    )
}

export default WhatsApp;