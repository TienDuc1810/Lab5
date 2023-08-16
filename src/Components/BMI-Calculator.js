import React, { useEffect, useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';

const IntegerStep1 = ({ onChange, value }) => {
    const onSliderChange = (newValue) => {
        onChange(newValue); // Update the input field when slider changes
    };

    return (
        <>
            <div style={{ display: 'flex' }}>Trọng lượng - Kg</div>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={500}
                        onChange={onSliderChange}
                        value={value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={500}
                        style={{
                            margin: '0 16px',
                        }}
                        value={value}
                        onChange={onChange} // Update the slider when input changes
                    />
                </Col>
            </Row>
        </>
    );
};

const IntegerStep2 = ({ onChange, value }) => {
    const onSliderChange = (newValue) => {
        onChange(newValue); // Update the input field when slider changes
    };

    return (
        <>
            <div style={{ display: 'flex' }}>Chiều cao - Cm</div>
            <Row>
                <Col span={12}>
                    <Slider
                        min={0}
                        max={500}
                        onChange={onSliderChange}
                        value={value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={0}
                        max={500}
                        style={{
                            margin: '0 16px',
                        }}
                        value={value}                  
                        onChange={onChange} // Update the slider when input changes
                    />
                </Col>
            </Row>
        </>
    );
};

const BMICalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(0);
    const [classify, setClassify] = useState('');

    const handleWeightChange = (newValue) => {
        setWeight(newValue);
    };

    const handleHeightChange = (newValue) => {
        setHeight(newValue);
    };

    useEffect(() => {
        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
            setResult(bmi);
            if(bmi < 18.5){
                setClassify('Gầy')
            }
            else if(18.5 <= bmi && bmi <= 24.9){
                setClassify('Bình thường')
            }
            else if(25 <= bmi && bmi <= 29.9){
                setClassify('Tiền béo phì')
            }
            else if(30 <= bmi && bmi <= 34.9){
                setClassify('Béo phì độ I')
            }
            else if(35 <= bmi && bmi <= 39.9){
                setClassify('Béo phì độ II')
            }
            else if(bmi > 40 && bmi <= 69.9){
                setClassify('Béo phì độ III')
            }
            else if(bmi > 70){
                setClassify('Đăng xuất Sever Trái Đất')
            }
        }
    }, [weight, height]);
    
    return (
        <Space
            style={{
                width: '100%',
            }}
            direction="vertical"
        >
            <IntegerStep1 onChange={handleWeightChange} value={weight} />
            <IntegerStep2 onChange={handleHeightChange} value={height} />
            <div style={{ display: 'flex' }}>Kết Quả: {result}</div>
            <div style={{ display: 'flex' }}>Phân Loại: {classify}</div>
        </Space>
    );
};

export default BMICalculator;
