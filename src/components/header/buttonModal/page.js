"use client";
import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { Typography } from 'antd';
const ButtonModal = () => {
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        console.log('OK clicked');
        setVisible(false);
    };

    const handleCancel = () => {
        console.log('Cancel clicked');
        setVisible(false);
    };
    return (
        <div className=' flex gap-2'>
            <button onClick={ showModal } class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded-full">
                Signup
            </button>
            <button onClick={ showModal } class="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded-full">
                Login
            </button>


            <Modal
                title=""
                visible={ visible }
                onOk={ handleOk }
                onCancel={ handleCancel }
            >
                <Title level={ 4 }>Enter email / phone number</Title>
                <br />
                <Input size='large' placeholder="Enter your phone number or email id" />
                <br />
                <br />

            </Modal>
        </div>
    )
}

export default ButtonModal